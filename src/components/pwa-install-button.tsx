import { useState } from "react";
import { Download, X } from "lucide-react";
import { usePWAInstall } from "@/lib/use-pwa-install";

export function PWAInstallButton({ compact = false }: { compact?: boolean }) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) return null;

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={() => void install()}
        className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md border border-amber/60 bg-amber/10 font-medium text-amber transition-colors hover:border-amber hover:bg-amber/20 ${
          compact ? "h-9 px-2.5 text-xs" : "h-10 px-3.5 text-sm"
        }`}
      >
        <Download className="size-3.5" aria-hidden="true" />
        <span>Install app</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md border border-border px-3 font-medium text-muted-foreground transition-colors hover:border-amber/60 hover:text-amber ${
            compact ? "h-9 text-xs" : "h-10 text-xs"
          }`}
        >
          <Download className="size-3.5" aria-hidden="true" />
          <span>Install</span>
        </button>

        {showIOSGuide && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ios-install-heading"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <h2
                  id="ios-install-heading"
                  className="font-display text-lg font-semibold text-headline"
                >
                  Install PTQU App
                </h2>
                <button
                  type="button"
                  aria-label="Close instructions"
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-md p-1 text-muted-foreground hover:text-headline"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
              <ol className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>
                  1. Tap the <strong className="text-headline">Share</strong> button in Safari.
                </li>
                <li>
                  2. Scroll down and tap{" "}
                  <strong className="text-headline">Add to Home Screen</strong>.
                </li>
              </ol>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md bg-amber text-sm font-semibold text-primary-foreground hover:bg-amber-soft"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
}
