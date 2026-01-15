type CTAEvent = {
    event: "cta_click";
    location: "hero" | "cta_bucket";
    target: "research" | "products" | "notes";
    label?: string;
};

type ContentOpenEvent = {
    event: "content_open";
    section: "research" | "products" | "notes";
    slug: string;
    tags?: string[];
};

type ExternalClickEvent = {
    event: "external_click";
    kind: "github" | "patents" | "linkedin";
    target: string;
};

type AnalyticsEvent = CTAEvent | ContentOpenEvent | ExternalClickEvent;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export function track(event: AnalyticsEvent) {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    const { event: name, ...params } = event;

    window.gtag("event", name, params);
}