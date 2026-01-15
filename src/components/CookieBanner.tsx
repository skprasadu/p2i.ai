"use client";

import { useState } from "react";

type Consent = "accepted" | "rejected";

const STORAGE_KEY = "p2i_cookie_consent_v1";

function setCookie(name: string, value: string, days: number) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export default function CookieBanner() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem(STORAGE_KEY);
  });

  function save(consent: Consent) {
    window.localStorage.setItem(STORAGE_KEY, consent);
    // Optional: also set an actual cookie so backend can read it later
    setCookie("p2i_cookie_consent", consent, 180);
    setShow(false);
  }

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
        <button
          type="button"
          className="btn btnSecondary"
          onClick={() => save("rejected")}
          aria-label="Reject non-essential cookies"
        >
          Reject
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => save("accepted")}
          aria-label="Accept all cookies"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}