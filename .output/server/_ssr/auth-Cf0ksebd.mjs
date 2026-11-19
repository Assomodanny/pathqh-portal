import { n as __toESM } from "../_runtime.mjs";
import { a as matchActiveSubjectOption, t as ACTIVE_SUBJECT_OPTIONS } from "./curriculum-rYiZvMsx.mjs";
import { v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Cf0ksebd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var supabase = createClient("https://rupickfdkegwguhkdntz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1cGlja2Zka2Vnd2d1aGtkbnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjgwNzQsImV4cCI6MjEwMzQ0NDA3NH0.2B15F4ocLWXJZ5ylHz0xLNAYYgZGrcv4j49FcmSUlCM", { auth: {
	persistSession: true,
	autoRefreshToken: true,
	detectSessionInUrl: true
} });
/**
* Portal queries & admin/teacher/student helpers against the school's Supabase schema.
*/
/** Resolve the signed-in user's role via user_roles → roles.name. */
async function fetchUserRole(userId) {
	const { data, error } = await supabase.from("user_roles").select("roles(name)").eq("user_id", userId);
	if (error) throw new Error(error.message);
	const names = (data ?? []).flatMap((row) => Array.isArray(row.roles) ? row.roles : row.roles ? [row.roles] : []).map((r) => (r.name ?? "").toLowerCase());
	for (const candidate of [
		"admin",
		"teacher",
		"student"
	]) if (names.includes(candidate)) return candidate;
	return null;
}
var roleHome = {
	admin: "/admin",
	teacher: "/teacher",
	student: "/student"
};
/** profiles.id is the shared identity id (matches auth.users.id). */
async function fetchProfile(userId) {
	const { data, error } = await supabase.from("profiles").select("id, full_name, email, phone, avatar_url, is_active").eq("id", userId).maybeSingle();
	if (error) throw new Error(error.message);
	return data ?? null;
}
async function fetchAdminCounts() {
	const [students, teachers, subjects] = await Promise.all([
		supabase.from("students").select("id", {
			count: "exact",
			head: true
		}),
		supabase.from("teachers").select("id", {
			count: "exact",
			head: true
		}),
		supabase.from("subjects").select("id", {
			count: "exact",
			head: true
		}).eq("is_active", true)
	]);
	const firstError = students.error ?? teachers.error ?? subjects.error;
	if (firstError) throw new Error(firstError.message);
	return {
		students: students.count ?? 0,
		teachers: teachers.count ?? 0,
		subjects: subjects.count ?? 0
	};
}
async function fetchTeacherByProfile(profileId) {
	const { data, error } = await supabase.from("teachers").select("id, profile_id, employee_id, qualification, specialization, status").eq("profile_id", profileId).maybeSingle();
	if (error) throw new Error(error.message);
	return data ?? null;
}
async function fetchStudentByProfile(profileId) {
	const { data, error } = await supabase.from("students").select("id, profile_id, student_id, class_name, admission_date, date_of_birth, gender, status").eq("profile_id", profileId).maybeSingle();
	if (error) throw new Error(error.message);
	return data ?? null;
}
async function fetchEnrollments(studentRowId) {
	const { data, error } = await supabase.from("enrollments").select("id, enrolled_at, status, subjects(id, name, code, description, is_active)").eq("student_id", studentRowId).in("status", ["active", "completed"]);
	if (error) throw new Error(error.message);
	return (data ?? []).map((row) => ({
		...row,
		subjects: Array.isArray(row.subjects) ? row.subjects[0] ?? null : row.subjects
	}));
}
async function fetchTeacherSubjects(teacherRowId) {
	const { data, error } = await supabase.from("teacher_subjects").select("teacher_id, subject_id, created_at, subjects(id, name, code, description, is_active)").eq("teacher_id", teacherRowId).order("created_at", { ascending: true });
	if (error) throw new Error(error.message);
	return (data ?? []).map((row) => ({
		...row,
		subjects: Array.isArray(row.subjects) ? row.subjects[0] ?? null : row.subjects
	}));
}
async function fetchAllTeacherSubjects() {
	const { data, error } = await supabase.from("teacher_subjects").select("teacher_id, subject_id, created_at, subjects(id, name, code, description, is_active)").order("created_at", { ascending: true });
	if (error) throw new Error(error.message);
	return (data ?? []).map((row) => ({
		...row,
		subjects: Array.isArray(row.subjects) ? row.subjects[0] ?? null : row.subjects
	}));
}
async function fetchTeacherCandidates() {
	const teacherRows = await fetchTeachers();
	const candidates = teacherRows.map((row) => ({
		selectionKey: `teacher:${row.id}`,
		teacherRowId: row.id,
		profileId: row.profile_id,
		employeeId: row.employee_id,
		qualification: row.qualification,
		specialization: row.specialization,
		status: row.status,
		fullName: row.profiles?.full_name ?? row.profiles?.email ?? row.employee_id ?? "Teacher",
		email: row.profiles?.email ?? null
	}));
	const seenProfiles = new Set(teacherRows.map((r) => r.profile_id));
	try {
		const { data: roleRows, error: roleError } = await supabase.from("user_roles").select("user_id, roles(name)").order("user_id", { ascending: true });
		if (!roleError && roleRows) {
			const teacherUserIds = roleRows.filter((row) => {
				return (Array.isArray(row.roles) ? row.roles : row.roles ? [row.roles] : []).some((item) => (item.name ?? "").toLowerCase() === "teacher");
			}).map((row) => row.user_id).filter((id) => !seenProfiles.has(id));
			if (teacherUserIds.length > 0) {
				const { data: profileRows, error: profError } = await supabase.from("profiles").select("id, full_name, email, phone, avatar_url, is_active").in("id", teacherUserIds);
				if (!profError && profileRows) for (const profile of profileRows) candidates.push({
					selectionKey: `profile:${profile.id}`,
					teacherRowId: null,
					profileId: profile.id,
					employeeId: null,
					qualification: null,
					specialization: null,
					status: "active",
					fullName: profile.full_name ?? profile.email ?? "Teacher",
					email: profile.email
				});
			}
		}
	} catch {}
	return candidates.sort((a, b) => a.fullName.localeCompare(b.fullName));
}
async function assignSubjectsToTeacher(input) {
	let resolvedTeacherId = input.teacherRowId;
	if (!resolvedTeacherId) {
		const { data: existingTeacher } = await supabase.from("teachers").select("id").eq("profile_id", input.profileId).maybeSingle();
		if (existingTeacher && existingTeacher.id) resolvedTeacherId = existingTeacher.id;
		else {
			const generatedCode = `TCH-${Date.now().toString().slice(-5)}`;
			const { data: insertedTeacher, error: teacherError } = await supabase.from("teachers").insert({
				profile_id: input.profileId,
				employee_id: generatedCode,
				status: "active"
			}).select("id").single();
			if (teacherError || !insertedTeacher) throw new Error(teacherError?.message ?? "Could not create teacher record.");
			resolvedTeacherId = insertedTeacher.id;
		}
	}
	const uniqueSubjectIds = [...new Set(input.subjectIds.filter(Boolean))];
	if (uniqueSubjectIds.length === 0) return {
		teacherRowId: resolvedTeacherId,
		addedCount: 0
	};
	const { data: currentRows, error: currentError } = await supabase.from("teacher_subjects").select("subject_id").eq("teacher_id", resolvedTeacherId);
	if (currentError) throw new Error(currentError.message);
	const alreadyAssigned = new Set((currentRows ?? []).map((r) => r.subject_id));
	const toInsert = uniqueSubjectIds.filter((subjectId) => !alreadyAssigned.has(subjectId)).map((subjectId) => ({
		teacher_id: resolvedTeacherId,
		subject_id: subjectId
	}));
	if (toInsert.length > 0) {
		const { error: assignError } = await supabase.from("teacher_subjects").insert(toInsert);
		if (assignError) throw new Error(assignError.message);
	}
	return {
		teacherRowId: resolvedTeacherId,
		addedCount: toInsert.length
	};
}
async function removeTeacherSubject(teacherRowId, subjectId) {
	const { error } = await supabase.from("teacher_subjects").delete().eq("teacher_id", teacherRowId).eq("subject_id", subjectId);
	if (error) throw new Error(error.message);
}
async function fetchAllEnrollments() {
	const { data, error } = await supabase.from("enrollments").select("id, student_id, subject_id, enrolled_at, status, subjects(id, name, code, description, is_active)").order("enrolled_at", { ascending: false });
	if (error) throw new Error(error.message);
	return (data ?? []).map((row) => ({
		...row,
		subjects: Array.isArray(row.subjects) ? row.subjects[0] ?? null : row.subjects
	}));
}
async function fetchSubjects() {
	const { data, error } = await supabase.from("subjects").select("id, name, code, description, is_active").order("name", { ascending: true });
	if (error) throw new Error(error.message);
	return data ?? [];
}
/**
* Maps each of the 4 active subjects to its row in `subjects`.
* Matching is flexible against short names ("Nahwu", "Hadith"), codes, or full labels.
*/
async function fetchResolvedActiveSubjects() {
	const existing = await fetchSubjects();
	const findMatch = (option, rows) => rows.find((row) => {
		return (matchActiveSubjectOption(row.name) ?? matchActiveSubjectOption(row.code))?.key === option.key;
	}) ?? null;
	const missing = ACTIVE_SUBJECT_OPTIONS.filter((opt) => !findMatch(opt, existing));
	let allRows = existing;
	if (missing.length > 0) {
		const toInsert = missing.map((opt) => ({
			name: opt.fullLabel,
			code: opt.code,
			description: opt.description,
			is_active: true
		}));
		const { error: insertError } = await supabase.from("subjects").insert(toInsert);
		if (!insertError) allRows = await fetchSubjects();
	}
	return ACTIVE_SUBJECT_OPTIONS.map((option) => ({
		option,
		subjectRow: findMatch(option, allRows)
	}));
}
function formatStudentCode(num) {
	return `STU${String(Math.max(1, Math.floor(num))).padStart(3, "0")}`;
}
async function nextStudentNumber() {
	const { data, error } = await supabase.from("students").select("student_id");
	if (error || !data) return 1;
	let maxNum = 0;
	for (const row of data) {
		const match = row.student_id?.trim().match(/^STU[-_]?(\d+)$/i);
		if (!match?.[1]) continue;
		const parsed = Number.parseInt(match[1], 10);
		if (Number.isFinite(parsed) && parsed > maxNum) maxNum = parsed;
	}
	return maxNum + 1;
}
function isDuplicateKeyError(message, columnHint) {
	const lower = (message ?? "").toLowerCase();
	if (!(lower.includes("duplicate key") || lower.includes("unique constraint"))) return false;
	return columnHint ? lower.includes(columnHint.toLowerCase()) : true;
}
/**
* Ensures a `students` row exists for the given `profileId`, generating the next
* `STU00X` code, assigning `'Beginner Class'`, today's admission date, and `'active'` status.
*/
async function createStudentRecordForProfile(profileId) {
	const { data: existingStudent, error: lookupError } = await supabase.from("students").select("id, profile_id, student_id, class_name, admission_date, date_of_birth, gender, status").eq("profile_id", profileId).maybeSingle();
	if (lookupError) throw new Error(lookupError.message);
	if (existingStudent) return existingStudent;
	const startNum = await nextStudentNumber();
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	let lastError = null;
	for (let attempt = 0; attempt < 25; attempt += 1) {
		const candidateCode = formatStudentCode(startNum + attempt);
		const { data: insertedStudent, error: studentError } = await supabase.from("students").insert({
			profile_id: profileId,
			student_id: candidateCode,
			class_name: "Beginner Class",
			admission_date: today,
			status: "active"
		}).select("id, profile_id, student_id, class_name, admission_date, date_of_birth, gender, status").single();
		if (!studentError && insertedStudent) return insertedStudent;
		lastError = studentError?.message ?? "Could not create student record.";
		if (isDuplicateKeyError(lastError, "profile_id")) {
			const { data: raceRow } = await supabase.from("students").select("id, profile_id, student_id, class_name, admission_date, date_of_birth, gender, status").eq("profile_id", profileId).maybeSingle();
			if (raceRow) return raceRow;
		}
		if (isDuplicateKeyError(lastError, "student_id") || isDuplicateKeyError(lastError)) continue;
		throw new Error(lastError);
	}
	throw new Error(lastError ?? "Could not generate a unique student ID.");
}
/**
* Returns all `students` rows plus any signed-up `student`-role profiles that do not yet
* have a `students` record, along with a diagnostic warning if RLS restricts role/profile reads.
*/
async function fetchStudentCandidatesWithStatus() {
	const studentRows = await fetchStudents();
	const candidates = studentRows.map((row) => ({
		selectionKey: `student:${row.id}`,
		studentRowId: row.id,
		profileId: row.profile_id,
		studentCode: row.student_id,
		className: row.class_name,
		status: row.status,
		fullName: row.profiles?.full_name ?? row.profiles?.email ?? row.student_id ?? "Student",
		email: row.profiles?.email ?? null
	}));
	const seenProfiles = new Set(studentRows.map((r) => r.profile_id));
	let warning = null;
	try {
		const [rolesRes, userRolesRes] = await Promise.all([supabase.from("roles").select("id, name"), supabase.from("user_roles").select("user_id, role_id, roles(name)").order("user_id", { ascending: true })]);
		if (userRolesRes.error) warning = `Could not load unlinked student accounts from user_roles (${userRolesRes.error.message}).`;
		else if (userRolesRes.data) {
			const studentRoleIds = new Set((rolesRes.data ?? []).filter((r) => (r.name ?? "").toLowerCase() === "student").map((r) => r.id));
			const studentUserIds = userRolesRes.data.filter((row) => {
				if (row.role_id && studentRoleIds.has(row.role_id)) return true;
				return (Array.isArray(row.roles) ? row.roles : row.roles ? [row.roles] : []).some((item) => (item.name ?? "").toLowerCase() === "student");
			}).map((row) => row.user_id).filter((id, idx, arr) => Boolean(id) && arr.indexOf(id) === idx && !seenProfiles.has(id));
			if (studentUserIds.length > 0) {
				const { data: profileRows, error: profError } = await supabase.from("profiles").select("id, full_name, email, phone, avatar_url, is_active").in("id", studentUserIds);
				if (profError) warning = `Found ${studentUserIds.length} student account(s) without a student record, but reading profiles failed (${profError.message}).`;
				else {
					const profileById = new Map((profileRows ?? []).map((profile) => [profile.id, profile]));
					for (const uid of studentUserIds) {
						const profile = profileById.get(uid);
						candidates.push({
							selectionKey: `profile:${uid}`,
							studentRowId: null,
							profileId: uid,
							studentCode: null,
							className: null,
							status: "pending",
							fullName: profile?.full_name ?? profile?.email ?? `Pending Student (${uid.slice(0, 6)})`,
							email: profile?.email ?? null
						});
					}
				}
			}
		}
	} catch (err) {
		warning = err.message;
	}
	return {
		candidates: candidates.sort((a, b) => a.fullName.localeCompare(b.fullName)),
		warning
	};
}
/**
* Ensures a `students` row exists for the candidate (creating STU00X + 'Beginner Class'
* if missing), then inserts any newly ticked subjects into `enrollments`.
*/
async function enrollStudentInSubjects(input) {
	let resolvedStudentId = input.studentRowId;
	if (!resolvedStudentId) resolvedStudentId = (await createStudentRecordForProfile(input.profileId)).id;
	const uniqueSubjectIds = [...new Set(input.subjectIds.filter(Boolean))];
	if (uniqueSubjectIds.length === 0) return {
		studentRowId: resolvedStudentId,
		addedCount: 0
	};
	const { data: currentRows, error: currentError } = await supabase.from("enrollments").select("id, subject_id, status").eq("student_id", resolvedStudentId);
	if (currentError) throw new Error(currentError.message);
	const existingBySubject = new Map((currentRows ?? []).map((r) => [r.subject_id, r]));
	const toReactivateIds = [];
	const toInsert = [];
	for (const subjectId of uniqueSubjectIds) {
		const existing = existingBySubject.get(subjectId);
		if (!existing) toInsert.push({
			student_id: resolvedStudentId,
			subject_id: subjectId,
			status: "active",
			enrolled_at: (/* @__PURE__ */ new Date()).toISOString()
		});
		else if (existing.status === "inactive") toReactivateIds.push(existing.id);
	}
	if (toReactivateIds.length > 0) {
		const { error: reactivateError } = await supabase.from("enrollments").update({
			status: "active",
			enrolled_at: (/* @__PURE__ */ new Date()).toISOString()
		}).in("id", toReactivateIds);
		if (reactivateError) throw new Error(reactivateError.message);
	}
	if (toInsert.length > 0) {
		const { error: enrollError } = await supabase.from("enrollments").insert(toInsert);
		if (enrollError) throw new Error(enrollError.message);
	}
	return {
		studentRowId: resolvedStudentId,
		addedCount: toInsert.length + toReactivateIds.length
	};
}
async function removeEnrollment(enrollmentId) {
	const { error } = await supabase.from("enrollments").delete().eq("id", enrollmentId);
	if (error) throw new Error(error.message);
}
async function fetchLiveClasses() {
	const { data, error } = await supabase.from("live_classes").select("id, subject, day_of_week, start_time, end_time, platform, join_url, is_active").eq("is_active", true);
	if (error) throw new Error(error.message);
	return data ?? [];
}
var dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
/** "Every Wednesday" / "Schedule pending" for null values. */
function formatDay(day) {
	if (day === null || day === void 0 || day === "") return "Schedule pending";
	if (typeof day === "number") return dayNames[day] ? `Every ${dayNames[day]}` : "Schedule pending";
	const numeric = Number(day);
	if (!Number.isNaN(numeric) && dayNames[numeric]) return `Every ${dayNames[numeric]}`;
	return `Every ${day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()}`;
}
function formatTime(value) {
	const [h, m] = value.split(":");
	const hour = Number(h);
	if (Number.isNaN(hour)) return value;
	const suffix = hour >= 12 ? "PM" : "AM";
	return `${hour % 12 === 0 ? 12 : hour % 12}:${m ?? "00"} ${suffix}`;
}
function formatTimeRange(start, end) {
	if (!start) return "Schedule pending";
	return end ? `${formatTime(start)} – ${formatTime(end)}` : formatTime(start);
}
function firstOrNull(value) {
	return Array.isArray(value) ? value[0] ?? null : value;
}
async function fetchStudents() {
	const { data, error } = await supabase.from("students").select("id, profile_id, student_id, class_name, admission_date, date_of_birth, gender, status, profiles(id, full_name, email, phone, avatar_url, is_active)");
	if (error) throw new Error(error.message);
	return (data ?? []).map((row) => ({
		...row,
		profiles: firstOrNull(row.profiles)
	}));
}
async function fetchTeachers() {
	const { data, error } = await supabase.from("teachers").select("id, profile_id, employee_id, qualification, specialization, status, profiles(id, full_name, email, phone, avatar_url, is_active)");
	if (error) throw new Error(error.message);
	return (data ?? []).map((row) => ({
		...row,
		profiles: firstOrNull(row.profiles)
	}));
}
/** Admin-only write (enforced by the existing RLS policy on live_classes). */
async function createLiveClass(input) {
	const { error } = await supabase.from("live_classes").insert({
		...input,
		is_active: true
	});
	if (error) throw new Error(error.message);
}
async function updateLiveClass(id, input) {
	const { error } = await supabase.from("live_classes").update(input).eq("id", id);
	if (error) throw new Error(error.message);
}
async function deleteLiveClass(id) {
	const { error } = await supabase.from("live_classes").delete().eq("id", id);
	if (error) throw new Error(error.message);
}
/** "google_meet" → "Google Meet". */
function formatPlatform(platform) {
	if (!platform) return "Platform to be confirmed";
	return platform.split(/[_\s-]+/).filter(Boolean).map((word) => word.toLowerCase() === "whatsapp" ? "WhatsApp" : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
var paymentColumns = "id, student_id, subject_id, month, amount_due, amount_paid, payment_date, is_paid, grace_period_active, receipt_reference, created_at";
/** First day of the given month as an ISO date string (YYYY-MM-01). */
function monthStart(date = /* @__PURE__ */ new Date()) {
	return `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(2, "0")}-01`;
}
/** The tag a workaround row carries, e.g. "STU001" → "[STU001]". */
function referenceTag(studentCode) {
	return `[${studentCode}]`;
}
/**
* Current-month payments for one student: rows linked by student_id, plus
* untagged-workaround rows whose receipt_reference starts with [STUDENT_ID].
*/
async function fetchStudentPayments(studentRowId, studentCode, month = monthStart()) {
	const byId = supabase.from("payments").select(paymentColumns).eq("month", month).eq("student_id", studentRowId);
	const byReference = studentCode ? supabase.from("payments").select(paymentColumns).eq("month", month).is("student_id", null).ilike("receipt_reference", `${referenceTag(studentCode)}%`) : null;
	const [linked, tagged] = await Promise.all([byId, byReference ?? Promise.resolve(null)]);
	if (linked.error) throw new Error(linked.error.message);
	if (tagged?.error) throw new Error(tagged.error.message);
	const rows = [...linked.data ?? [], ...tagged?.data ?? []];
	const seen = /* @__PURE__ */ new Set();
	return rows.filter((row) => seen.has(row.id) ? false : (seen.add(row.id), true));
}
/**
* Gating rule: block only when an unpaid row exists for the current month AND
* the 2-day grace period after the 1st has passed AND no row still carries
* grace_period_active. Students with no payment record are never blocked.
*/
function evaluatePaymentStatus(rows, today = /* @__PURE__ */ new Date()) {
	const unpaid = rows.filter((row) => row.is_paid !== true);
	const amountOwed = unpaid.reduce((total, row) => total + Math.max((row.amount_due ?? 0) - (row.amount_paid ?? 0), 0), 0);
	const withinGrace = today.getDate() <= 3 || unpaid.some((row) => row.grace_period_active === true);
	return {
		unpaid,
		amountOwed,
		withinGrace,
		blocked: unpaid.length > 0 && !withinGrace
	};
}
function formatNaira(amount) {
	return `₦${amount.toLocaleString("en-NG")}`;
}
function formatMonth(month) {
	if (!month) return "This month";
	const date = /* @__PURE__ */ new Date(`${month}T00:00:00`);
	if (Number.isNaN(date.getTime())) return month;
	return date.toLocaleDateString("en-NG", {
		month: "long",
		year: "numeric"
	});
}
/** All payments for a month, newest first — admin view. */
async function fetchPayments(month = monthStart()) {
	const { data, error } = await supabase.from("payments").select(paymentColumns).eq("month", month).order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
}
/** Admin-only write (enforced by the existing RLS policy on payments). */
async function setPaymentPaid(row, isPaid) {
	const { error } = await supabase.from("payments").update(isPaid ? {
		is_paid: true,
		amount_paid: row.amount_due ?? row.amount_paid ?? 0,
		payment_date: (/* @__PURE__ */ new Date()).toISOString()
	} : {
		is_paid: false,
		amount_paid: 0,
		payment_date: null
	}).eq("id", row.id);
	if (error) throw new Error(error.message);
}
/** Admin-only write — creates a new payment record for a student and month. */
async function createPayment(input) {
	const { error } = await supabase.from("payments").insert({
		student_id: input.student_id,
		month: input.month,
		amount_due: input.amount_due,
		amount_paid: input.is_paid ? input.amount_due : input.amount_paid,
		is_paid: input.is_paid,
		grace_period_active: input.grace_period_active,
		receipt_reference: input.receipt_reference,
		payment_date: input.is_paid ? (/* @__PURE__ */ new Date()).toISOString() : null
	});
	if (error) throw new Error(error.message);
}
/** Admin-only write — edits amount due, amount paid, grace period, reference, or status. */
async function updatePayment(id, input) {
	const { error } = await supabase.from("payments").update({
		amount_due: input.amount_due,
		amount_paid: input.is_paid && input.amount_paid === 0 ? input.amount_due : input.amount_paid,
		is_paid: input.is_paid,
		grace_period_active: input.grace_period_active,
		receipt_reference: input.receipt_reference,
		payment_date: input.is_paid ? (/* @__PURE__ */ new Date()).toISOString() : null
	}).eq("id", id);
	if (error) throw new Error(error.message);
}
/** Admin-only batch update — sets amount_due across all unpaid rows for a given month. */
async function applyRateToUnpaidMonth(month, amountDue) {
	const { error } = await supabase.from("payments").update({ amount_due: amountDue }).eq("month", month).eq("is_paid", false);
	if (error) throw new Error(error.message);
}
/** "[STU001] MNP-TRF-…" → "STU001" */
function referenceStudentCode(reference) {
	return (reference?.match(/^\s*\[([^\]]+)\]/))?.[1]?.trim() ?? null;
}
async function fetchAssessmentResults(options) {
	const baseColumns = "id, student_id, assessment_id, score, total_marks, percentage, grade, submitted_at, graded_at, created_at, updated_at, assessments(id, title, subject_id, assessment_type, total_marks, subjects(id, name, code))";
	const selectClause = options?.studentRowId ? baseColumns : `${baseColumns}, students(id, student_id, profiles(id, full_name, email))`;
	let query = supabase.from("student_results").select(selectClause).order("graded_at", {
		ascending: false,
		nullsFirst: false
	}).order("created_at", { ascending: false });
	if (options?.studentRowId) query = query.eq("student_id", options.studentRowId);
	const { data, error } = await query;
	if (error) throw new Error(error.message);
	return (data ?? []).map((row) => {
		const assessment = firstOrNull(row.assessments);
		const subject = assessment ? firstOrNull(assessment.subjects) : null;
		const student = row.students ? firstOrNull(row.students) : null;
		const profile = student ? firstOrNull(student.profiles) : null;
		const totalMarks = row.total_marks ?? assessment?.total_marks ?? null;
		const score = row.score ?? null;
		const computedPercentage = row.percentage ?? (score !== null && totalMarks !== null && totalMarks > 0 ? Math.round(score / totalMarks * 1e3) / 10 : null);
		const subjectName = (matchActiveSubjectOption(subject?.name) ?? matchActiveSubjectOption(subject?.code))?.fullLabel ?? subject?.name ?? subject?.code ?? null;
		return {
			id: row.id,
			studentId: row.student_id,
			assessmentId: row.assessment_id,
			studentName: profile?.full_name ?? profile?.email ?? student?.student_id ?? null,
			studentCode: student?.student_id ?? null,
			subjectName,
			title: assessment?.title?.trim() || "Assessment",
			assessmentType: assessment?.assessment_type ?? null,
			score,
			totalMarks,
			percentage: computedPercentage,
			grade: row.grade ?? null,
			submittedAt: row.submitted_at ?? null,
			gradedAt: row.graded_at ?? null,
			recordedAt: row.graded_at ?? row.submitted_at ?? row.created_at ?? null
		};
	});
}
/**
* Auth integration point — backed by the school's existing Supabase project.
* All auth logic stays isolated in this module.
*/
function mapAuthUser(raw) {
	if (!raw) return null;
	const metaName = typeof raw.user_metadata?.["full_name"] === "string" ? raw.user_metadata["full_name"] : void 0;
	return {
		id: raw.id,
		email: raw.email ?? "",
		fullName: metaName
	};
}
function useAuth() {
	const [state, setState] = (0, import_react.useState)({
		user: null,
		isLoading: true
	});
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
			setState({
				user: mapAuthUser(session?.user),
				isLoading: false
			});
		});
		supabase.auth.getUser().then(({ data }) => {
			setState({
				user: mapAuthUser(data.user),
				isLoading: false
			});
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	return state;
}
function formatAuthError(message) {
	const lower = message.toLowerCase();
	if (lower.includes("invalid login credentials")) return "Incorrect email address or password. Please check your details and try again.";
	if (lower.includes("email not confirmed")) return "Your email address has not been confirmed yet. Please check your inbox for the confirmation link.";
	if (lower.includes("user already registered") || lower.includes("already exists")) return "An account with this email address already exists. Try signing in instead.";
	if (lower.includes("password") && lower.includes("least")) return "Password must be at least 6 characters long.";
	if (lower.includes("rate limit") || lower.includes("too many requests")) return "Too many attempts. Please wait a moment before trying again.";
	if (lower.includes("signups not allowed") || lower.includes("signup is disabled")) return "Public sign-up is currently disabled in authentication settings. Please contact the school administration.";
	return message;
}
/**
* Ensures a newly signed-up or first-time signed-in student has:
* 1) a `profiles` row,
* 2) ONLY the `student` role if they have no role yet (never overwriting admin/teacher), and
* 3) a `students` record (`STU00X`, `'Beginner Class'`, admitted today, `'active'`).
*/
async function ensureStudentOnboarding(userId, fullName, email) {
	try {
		const { data: existingProfile, error: profileReadError } = await supabase.from("profiles").select("id").eq("id", userId).maybeSingle();
		if (profileReadError) return {
			ok: false,
			role: null,
			studentCreated: false,
			error: profileReadError.message
		};
		if (!existingProfile) {
			const { error: profileInsertError } = await supabase.from("profiles").insert({
				id: userId,
				full_name: fullName?.trim() || null,
				email: email.trim(),
				is_active: true
			});
			if (profileInsertError) return {
				ok: false,
				role: null,
				studentCreated: false,
				error: profileInsertError.message
			};
		}
		const { data: existingRoles, error: rolesReadError } = await supabase.from("user_roles").select("role_id, roles(name)").eq("user_id", userId);
		if (rolesReadError) return {
			ok: false,
			role: null,
			studentCreated: false,
			error: rolesReadError.message
		};
		const roleNames = (existingRoles ?? []).flatMap((row) => Array.isArray(row.roles) ? row.roles : row.roles ? [row.roles] : []).map((r) => (r.name ?? "").toLowerCase());
		let effectiveRole = null;
		for (const candidate of [
			"admin",
			"teacher",
			"student"
		]) if (roleNames.includes(candidate)) {
			effectiveRole = candidate;
			break;
		}
		if (!existingRoles || existingRoles.length === 0) {
			const { data: studentRole, error: roleLookupError } = await supabase.from("roles").select("id").ilike("name", "student").maybeSingle();
			if (roleLookupError) return {
				ok: false,
				role: null,
				studentCreated: false,
				error: roleLookupError.message
			};
			if (studentRole && studentRole.id) {
				const { error: assignRoleError } = await supabase.from("user_roles").insert({
					user_id: userId,
					role_id: studentRole.id
				});
				if (assignRoleError) return {
					ok: false,
					role: null,
					studentCreated: false,
					error: assignRoleError.message
				};
				effectiveRole = "student";
			}
		}
		if (effectiveRole !== "student") return {
			ok: true,
			role: effectiveRole,
			studentCreated: false
		};
		const { data: existingStudent } = await supabase.from("students").select("id").eq("profile_id", userId).maybeSingle();
		if (existingStudent) return {
			ok: true,
			role: "student",
			studentCreated: false
		};
		await createStudentRecordForProfile(userId);
		return {
			ok: true,
			role: "student",
			studentCreated: true
		};
	} catch (err) {
		return {
			ok: false,
			role: null,
			studentCreated: false,
			error: err.message
		};
	}
}
async function signInWithEmail(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.trim(),
		password
	});
	if (error) return { error: formatAuthError(error.message) };
	if (data.user) {
		const metaName = typeof data.user.user_metadata?.["full_name"] === "string" ? data.user.user_metadata["full_name"] : void 0;
		await ensureStudentOnboarding(data.user.id, metaName, data.user.email ?? email.trim());
	}
	return {};
}
async function signUpWithEmail(input) {
	const cleanName = input.fullName.trim();
	const cleanEmail = input.email.trim();
	const { data, error } = await supabase.auth.signUp({
		email: cleanEmail,
		password: input.password,
		options: {
			data: {
				full_name: cleanName,
				role: "student"
			},
			...typeof window !== "undefined" ? { emailRedirectTo: `${window.location.origin}/login` } : {}
		}
	});
	if (error) return { error: formatAuthError(error.message) };
	if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) return { error: "An account with this email address already exists. Try signing in instead." };
	if (data.session && data.user) {
		await ensureStudentOnboarding(data.user.id, cleanName, cleanEmail);
		return { needsEmailConfirmation: false };
	}
	return { needsEmailConfirmation: true };
}
async function signOut() {
	await supabase.auth.signOut();
}
//#endregion
export { formatTimeRange as A, signUpWithEmail as B, fetchTeacherCandidates as C, formatMonth as D, formatDay as E, removeTeacherSubject as F, updateLiveClass as H, roleHome as I, setPaymentPaid as L, referenceStudentCode as M, referenceTag as N, formatNaira as O, removeEnrollment as P, signInWithEmail as R, fetchTeacherByProfile as S, fetchUserRole as T, updatePayment as U, supabase as V, useAuth as W, fetchResolvedActiveSubjects as _, deleteLiveClass as a, fetchStudentPayments as b, evaluatePaymentStatus as c, fetchAllTeacherSubjects as d, fetchAssessmentResults as f, fetchProfile as g, fetchPayments as h, createPayment as i, monthStart as j, formatPlatform as k, fetchAdminCounts as l, fetchLiveClasses as m, assignSubjectsToTeacher as n, enrollStudentInSubjects as o, fetchEnrollments as p, createLiveClass as r, ensureStudentOnboarding as s, applyRateToUnpaidMonth as t, fetchAllEnrollments as u, fetchStudentByProfile as v, fetchTeacherSubjects as w, fetchStudents as x, fetchStudentCandidatesWithStatus as y, signOut as z };
