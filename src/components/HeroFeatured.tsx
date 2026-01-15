import Link from "next/link";

import { featured } from "@/config/featured";
import { getItem } from "@/lib/content";

import BucketCtas from "./BucketCtas";

export default function HeroFeatured() {
    const fResearch = getItem(featured.research.section, featured.research.slug);
    const fProducts = getItem(featured.products.section, featured.products.slug);
    const fNotes = getItem(featured.notes.section, featured.notes.slug);

    if (!fResearch || !fProducts || !fNotes) {
        // Fail loudly in dev so you fix slugs/content, but keep message clean.
        throw new Error(
            "Featured content missing. Check src/config/featured.ts and ensure the MDX pages exist."
        );
    }

    return (
        <div className="heroPanel">
            <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: "-0.01em" }}>
                Featured now
            </div>
            <p style={{ marginTop: 8 }}>
                Research artifacts, product wedges, and build notes—published as reproducible pages.
            </p>

            <div className="hr" style={{ margin: "14px 0" }} />

            {/* Commercial: CWA teaser (safe) */}
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Commercial</div>
            <div className="card" style={{ boxShadow: "none", padding: 14 }}>
                <div style={{ fontSize: 16, fontWeight: 900 }}>
                    Compliance AI Workbench (CWA)
                </div>
                <p style={{ marginTop: 6 }}>
                    A workflow-first workbench for ingest → curation → prompts → extraction → graph publish.
                </p>
                <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)" }}>
                    <li>Ingest data</li>
                    <li>Chunk + curate</li>
                    <li>Run prompts → JSONL</li>
                    <li>Visualize as mindmaps/graphs</li>
                    <li>Expert review → publish</li>
                </ul>
                <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link className="btn btnSecondary" href="/products">
                        Products
                    </Link>
                    <Link className="btn btnSecondary" href="/notes">
                        Notes
                    </Link>
                </div>
            </div>

            <div className="hr" style={{ margin: "14px 0" }} />

            {/* Research */}
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Research</div>
            <a className="card" href={`/research/${fResearch.slug}`} style={{ display: "block", boxShadow: "none" }}>
                <div style={{ fontSize: 16, fontWeight: 900 }}>{fResearch.title}</div>
                <p style={{ marginTop: 6 }}>{fResearch.description}</p>
                <div style={{ marginTop: 10, color: "rgba(11,15,23,0.55)", fontSize: 13 }}>
                    {fResearch.tags?.slice(0, 4).join(" • ")}
                </div>
            </a>

            <div style={{ height: 10 }} />

            {/* Open source product wedge */}
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Open source wedge</div>
            <a className="card" href={`/products/${fProducts.slug}`} style={{ display: "block", boxShadow: "none" }}>
                <div style={{ fontSize: 16, fontWeight: 900 }}>{fProducts.title}</div>
                <p style={{ marginTop: 6 }}>{fProducts.description}</p>
                <div style={{ marginTop: 10, color: "rgba(11,15,23,0.55)", fontSize: 13 }}>
                    {fProducts.tags?.slice(0, 4).join(" • ")}
                </div>
            </a>

            <div style={{ height: 10 }} />

            {/* Notes */}
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Notes</div>
            <a className="card" href={`/notes/${fNotes.slug}`} style={{ display: "block", boxShadow: "none" }}>
                <div style={{ fontSize: 16, fontWeight: 900 }}>{fNotes.title}</div>
                <p style={{ marginTop: 6 }}>{fNotes.description}</p>
            </a>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <BucketCtas variant="secondary" />
            </div>
        </div>
    );
}