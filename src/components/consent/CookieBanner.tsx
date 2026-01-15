"use client";

import { useSyncExternalStore, useCallback } from "react";

type Consent = "accepted" | "rejected";
const STORAGE_KEY = "p2i_cookie_consent_v1";

function setCookie(name: string, value: string, days: number) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

function subscribe(_onStoreChange: () => void) {
  // We don't actually subscribe to storage changes (rare), but React requires a subscribe function.
  // Return unsubscribe no-op.
  return () => { };
}

function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

// This is what React uses during SSR / hydration to avoid mismatch:
function getServerSnapshot(): string | null {
  return "accepted"; // pretend consent exists on server => banner hidden on SSR
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const show = !consent;

  const save = useCallback((value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setCookie("p2i_cookie_consent", value, 180);
    // No state update needed; next page load will respect it.
    // If you want it to disappear instantly, we can force a reload or add a tiny state, but let's keep it simple.
    window.location.reload();
  }, []);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 1000,
        border: "1px solid var(--border)",
        borderRadius: 16,
        background: "var(--surface)",
        boxShadow: "var(--shadow)",
        padding: 14,
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div style={{ minWidth: 240, maxWidth: 700 }}>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>Cookies</div>
        <div style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.4 }}>
          We use cookies to improve your experience. You can accept all cookies or
          reject non-essential cookies.
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button type="button" className="btn btnSecondary" onClick={() => save("rejected")}>
          Reject
        </button>
        <button type="button" className="btn" onClick={() => save("accepted")}>
          Accept all
        </button>
      </div>
    </div>
  );
}