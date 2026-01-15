"use client";

import { useEffect } from "react";

import { track } from "@/lib/analytics";

export default function ContentOpenTracker(props: {
    section: "research" | "products" | "notes";
    slug: string;
    tags?: string[];
}) {
    useEffect(() => {
        const base = {
            event: "content_open" as const,
            section: props.section,
            slug: props.slug,
        };

        track(props.tags && props.tags.length ? { ...base, tags: props.tags } : base);
    }, [props.section, props.slug, props.tags]);

    return null;
}