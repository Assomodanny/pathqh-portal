/**
 * Single guarded service-worker registration point.
 * Allows deployed origins and blocks only localhost, iframes, AI Studio editor preview, or ?sw=off.
 */
const SW_URL = "/sw.js";

function isLocalhostHost(host: string): boolean {
  const normalized = host.toLowerCase();
  return (
    normalized === "localhost" ||
    normalized === "127.0.0.1" ||
    normalized === "[::1]" ||
    normalized === "::1" ||
    normalized.endsWith(".localhost")
  );
}

function isInsideIframe(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function isAiStudioEditorPreview(host: string): boolean {
  const normalized = host.toLowerCase();
  return (
    normalized === "aistudio.google.com" ||
    normalized.endsWith(".aistudio.google.com") ||
    (normalized.startsWith("ais-dev-") && normalized.endsWith(".run.app"))
  );
}

async function unregisterAppServiceWorkers(): Promise<void> {
  if (!("serviceWorker" in navigator)) return;
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.allSettled(
    registrations
      .filter((registration) => {
        const scriptUrl =
          registration.active?.scriptURL ??
          registration.installing?.scriptURL ??
          registration.waiting?.scriptURL ??
          "";
        return scriptUrl.includes(SW_URL);
      })
      .map((registration) => registration.unregister()),
  );
}

function isBlockedContext(): boolean {
  const host = window.location.hostname;
  if (isLocalhostHost(host)) return true;
  if (isInsideIframe()) return true;
  if (isAiStudioEditorPreview(host)) return true;
  if (new URL(window.location.href).searchParams.get("sw") === "off") return true;
  return false;
}

export function registerServiceWorker(): void {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  if (isBlockedContext()) {
    void unregisterAppServiceWorkers();
    return;
  }

  void navigator.serviceWorker
    .register(SW_URL, { scope: "/", updateViaCache: "none" })
    .catch(() => {
      /* registration failures must never break the app */
    });
}
