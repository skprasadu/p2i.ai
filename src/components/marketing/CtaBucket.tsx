import Link from "next/link";

import type { ContentItem, ContentSection } from "@/generated/contentIndex";

export default function CtaBucket(props: {
    label: string;
    section: ContentSection;
    featured: ContentItem;
    blurb: string;
}) {
    const { label, section, featured, blurb } = props;

    return (
        <div className="card cardColumn">
            <div className="cardBody">
                <div style={{ fontSize: 16, fontWeight: 800 }}>{label}</div>
                <p style={{ marginTop: 8 }}>{blurb}</p>

                <div className="hr" style={{ margin: "14px 0" }} />

                <div style={{ fontWeight: 800, marginBottom: 6 }}>Featured</div>
                <a href={`/${section}/${featured.slug}`} style={{ display: "block" }}>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>{featured.title}</div>
                    <p style={{ marginTop: 6 }}>{featured.description}</p>
                </a>
            </div>
            <div className="cardActions">
                <Link className="btnSecondary" href={`/${section}`}>View all</Link>
                <Link className="btn" href={`/${section}/${featured.slug}`}>Open featured</Link>
            </div>
        </div>
    );
}