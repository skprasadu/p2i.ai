"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopNav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <div className="topNavWrap">
            {/* Desktop nav */}
            <nav className="topNavDesktop">
                <Link href="/products">Products</Link>
                <Link href="/research">Research</Link>
                <Link href="/notes">Notes</Link>
                <a href="#contact">Contact</a>
            </nav>

            {/* Mobile hamburger */}
            <button
                type="button"
                className="hamburgerBtn"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                ☰
            </button>

            {open ? (
                <button
                    type="button"
                    aria-label="Close menu"
                    aria-hidden="true"
                    tabIndex={-1}
                    onClick={() => setOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        margin: 0,
                        zIndex: 999,
                    }}
                />
            ) : null}
            {/* Mobile dropdown */}
            {open ? (
                <div className="topNavMobile">
                    <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
                    <Link href="/research" onClick={() => setOpen(false)}>Research</Link>
                    <Link href="/notes" onClick={() => setOpen(false)}>Notes</Link>
                    <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
                </div>
            ) : null}
        </div>
    );
}