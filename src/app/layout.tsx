import type { Metadata } from "next";
import "@/styles/globals.css";
import CookieBanner from "@/components/CookieBanner";

const siteUrl = "https://p2i.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "p2i.ai — Visual Engineering Portfolio",
    template: "%s — p2i.ai"
  },
  description: "Immersive WebGL-first portfolio showcasing production engineering and visual demos.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "p2i.ai  Visual Engineering Portfolio",
    description: "Immersive WebGL-first portfolio showcasing production engineering and visual demos.",
  },
  twitter: {
    card: "summary",
    title: "p2i.ai  Visual Engineering Portfolio",
    description: "Immersive WebGL-first portfolio showcasing production engineering and visual demos.",
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
              padding: "18px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a href="/" className="brandMark" aria-label="p2i.ai home">
              <em>P2I</em><span>.ai</span>
            </a>

            <nav className="topNav">
              <a href="/projects">Projects</a>
              <a
                href="https://patents.google.com/?inventor=Krishna+Srinivasmurthy"
                target="_blank"
                rel="noreferrer"
              >
                Patents
              </a>
              <a href="/#contact">Contact</a>
            </nav>
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