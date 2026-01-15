"use client";

import Link from "next/link";

import { track } from "@/lib/analytics";

type Props = {
    href: string;
    className?: string;
    children: React.ReactNode;
    event:
    | {
        event: "cta_click";
        location: "hero" | "cta_bucket";
        target: "research" | "products" | "notes";
        label?: string;
    }
    | {
        event: "external_click";
        kind: "github" | "patents" | "linkedin";
        target: string;
    };
};

export default function TrackedLink({ href, className, children, event }: Props) {
    return (
        <Link
            href={href}
            className={className}
            onClick={() => track(event)}
        >
            {children}
        </Link>
    );
}