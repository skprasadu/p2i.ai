"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="topNavWrap">
            {/* Desktop nav */}
            <nav className="topNavDesktop">
                <Link href="/research">Research</Link>
                <Link href="/notes">Notes</Link>
                <Link href="/products">Products</Link>
                <a
                    href="https://patents.google.com/?inventor=Krishna+Srinivasmurthy"
                    target="_blank"
                    rel="noreferrer"
                >
                    Patents
                </a>
                <Link href="/#contact">Contact</Link>
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

            {/* Mobile dropdown */}
            {open ? (
                <div className="topNavMobile">
                    <Link href="/research" onClick={() => setOpen(false)}>Research</Link>
                    <Link href="/notes" onClick={() => setOpen(false)}>Notes</Link>
                    <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
                    <a
                        href="https://patents.google.com/?inventor=Krishna+Srinivasmurthy"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setOpen(false)}
                    >
                        Patents
                    </a>
                    <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            ) : null}
        </div>
    );
}