/**
 * Auth integration point — backed by the school's existing Supabase project.
 * All auth logic stays isolated in this module.
 */
import { useEffect, useState } from "react";

import { supabase } from "./supabase";
import { createStudentRecordForProfile, type RoleName } from "./portal";

export type User = {
  id: string;
  email: string;
  fullName?: string | undefined;
} | null;

export type AuthState = {
  user: User;
  isLoading: boolean;
};

function mapAuthUser(
  raw:
    | { id: string; email?: string | undefined; user_metadata?: Record<string, unknown> }
    | null
    | undefined,
): User {
  if (!raw) return null;
  const metaName =
    typeof raw.user_metadata?.["full_name"] === "string"
      ? raw.user_metadata["full_name"]
      : undefined;
  return {
    id: raw.id,
    email: raw.email ?? "",
    fullName: metaName,
  };
}

export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({ user: null, isLoading: true });

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setState({
        user: mapAuthUser(session?.user),
        isLoading: false,
      });
    });

    void supabase.auth.getUser().then(({ data }) => {
      setState({
        user: mapAuthUser(data.user),
        isLoading: false,
      });
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  return state;
}

function formatAuthError(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("invalid login credentials")) {
    return "Incorrect email address or password. Please check your details and try again.";
  }
  if (lower.includes("email not confirmed")) {
    return "Your email address has not been confirmed yet. Please check your inbox for the confirmation link.";
  }
  if (lower.includes("user already registered") || lower.includes("already exists")) {
    return "An account with this email address already exists. Try signing in instead.";
  }
  if (lower.includes("password") && lower.includes("least")) {
    return "Password must be at least 6 characters long.";
  }
  if (lower.includes("rate limit") || lower.includes("too many requests")) {
    return "Too many attempts. Please wait a moment before trying again.";
  }
  if (lower.includes("signups not allowed") || lower.includes("signup is disabled")) {
    return "Public sign-up is currently disabled in authentication settings. Please contact the school administration.";
  }
  return message;
}

export type OnboardingResult = {
  ok: boolean;
  role: RoleName | null;
  studentCreated: boolean;
  error?: string;
};

/**
 * Ensures a newly signed-up or first-time signed-in student has:
 * 1) a `profiles` row,
 * 2) ONLY the `student` role if they have no role yet (never overwriting admin/teacher), and
 * 3) a `students` record (`STU00X`, `'Beginner Class'`, admitted today, `'active'`).
 */
export async function ensureStudentOnboarding(
  userId: string,
  fullName: string | undefined,
  email: string,
): Promise<OnboardingResult> {
  try {
    const { data: existingProfile, error: profileReadError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .maybeSingle();

    if (profileReadError) {
      return { ok: false, role: null, studentCreated: false, error: profileReadError.message };
    }

    if (!existingProfile) {
      const { error: profileInsertError } = await supabase.from("profiles").insert({
        id: userId,
        full_name: fullName?.trim() || null,
        email: email.trim(),
        is_active: true,
      });
      if (profileInsertError) {
        return {
          ok: false,
          role: null,
          studentCreated: false,
          error: profileInsertError.message,
        };
      }
    }

    const { data: existingRoles, error: rolesReadError } = await supabase
      .from("user_roles")
      .select("role_id, roles(name)")
      .eq("user_id", userId);

    if (rolesReadError) {
      return { ok: false, role: null, studentCreated: false, error: rolesReadError.message };
    }

    const roleNames = (existingRoles ?? [])
      .flatMap((row: { roles: { name: string | null } | { name: string | null }[] | null }) =>
        Array.isArray(row.roles) ? row.roles : row.roles ? [row.roles] : [],
      )
      .map((r) => (r.name ?? "").toLowerCase());

    let effectiveRole: RoleName | null = null;
    for (const candidate of ["admin", "teacher", "student"] as const) {
      if (roleNames.includes(candidate)) {
        effectiveRole = candidate;
        break;
      }
    }

    if (!existingRoles || existingRoles.length === 0) {
      const { data: studentRole, error: roleLookupError } = await supabase
        .from("roles")
        .select("id")
        .ilike("name", "student")
        .maybeSingle();

      if (roleLookupError) {
        return { ok: false, role: null, studentCreated: false, error: roleLookupError.message };
      }

      if (studentRole && (studentRole as { id?: string }).id) {
        const { error: assignRoleError } = await supabase.from("user_roles").insert({
          user_id: userId,
          role_id: (studentRole as { id: string }).id,
        });
        if (assignRoleError) {
          return {
            ok: false,
            role: null,
            studentCreated: false,
            error: assignRoleError.message,
          };
        }
        effectiveRole = "student";
      }
    }

    if (effectiveRole !== "student") {
      return { ok: true, role: effectiveRole, studentCreated: false };
    }

    const { data: existingStudent } = await supabase
      .from("students")
      .select("id")
      .eq("profile_id", userId)
      .maybeSingle();

    if (existingStudent) {
      return { ok: true, role: "student", studentCreated: false };
    }

    await createStudentRecordForProfile(userId);
    return { ok: true, role: "student", studentCreated: true };
  } catch (err) {
    return {
      ok: false,
      role: null,
      studentCreated: false,
      error: (err as Error).message,
    };
  }
}

export async function signInWithEmail(
  email: string,
  password: string,
): Promise<{ error?: string }> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });
  if (error) return { error: formatAuthError(error.message) };

  if (data.user) {
    const metaName =
      typeof data.user.user_metadata?.["full_name"] === "string"
        ? data.user.user_metadata["full_name"]
        : undefined;
    await ensureStudentOnboarding(data.user.id, metaName, data.user.email ?? email.trim());
  }

  return {};
}

export async function signUpWithEmail(input: {
  fullName: string;
  email: string;
  password: string;
}): Promise<{ error?: string; needsEmailConfirmation?: boolean }> {
  const cleanName = input.fullName.trim();
  const cleanEmail = input.email.trim();

  const { data, error } = await supabase.auth.signUp({
    email: cleanEmail,
    password: input.password,
    options: {
      data: {
        full_name: cleanName,
        role: "student",
      },
      ...(typeof window !== "undefined"
        ? { emailRedirectTo: `${window.location.origin}/login` }
        : {}),
    },
  });

  if (error) {
    return { error: formatAuthError(error.message) };
  }

  // Supabase returns an empty identities array when email already exists and confirmation is on.
  if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
    return {
      error: "An account with this email address already exists. Try signing in instead.",
    };
  }

  if (data.session && data.user) {
    await ensureStudentOnboarding(data.user.id, cleanName, cleanEmail);
    return { needsEmailConfirmation: false };
  }

  return { needsEmailConfirmation: true };
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}
