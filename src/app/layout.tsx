
import Link from "next/link";

import "@/styles/globals.css";
import CookieBanner from "@/components/CookieBanner";
import TopNav from "@/components/TopNav";

import type { Metadata } from "next";


const siteUrl = "https://p2i.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "P2I.ai — Applied AI Research & Products",
    template: "%s — p2i.ai"
  },
  description: "Applied AI research, benchmarks, and tools—published as reproducible pages and shaped into products.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "P2I.ai — Applied AI Research & Products",
    description: "Applied AI research, benchmarks, and tools—published as reproducible pages and shaped into products.",
  },
  twitter: {
    card: "summary",
    title: "P2I.ai — Applied AI Research & Products",
    description: "Applied AI research, benchmarks, and tools—published as reproducible pages and shaped into products.",
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD (LLM-friendly + Google-friendly)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krishna Srinivasmurthy",
    url: siteUrl,
    sameAs: ["https://patents.google.com/?inventor=Krishna+Srinivasmurthy"],
    jobTitle: "AI Engineer / Builder",
    description: "Engineer building production systems and visual demos."
  };

  return (
    <html lang="en">
      <body>
        <div className="container" style={{ paddingBottom: 50 }}>
          <header
            style={{
              position: "relative",
              padding: "18px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/" className="brandMark" aria-label="p2i.ai home">
              <em>P2I</em><span>.ai</span>
            </Link>
            <TopNav />
          </header>
          {children}

          <footer style={{ marginTop: 40, paddingTop: 18 }} className="hr">
            <div style={{ color: "rgba(11, 15, 23, 0.65)", fontSize: 13 }}>
              © {new Date().getFullYear()} p2i.ai — built with Next.js + WebGL
            </div>
          </footer>
        </div>

        <CookieBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}