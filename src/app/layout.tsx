
import Link from "next/link";


import "@/styles/globals.css";

import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieBanner from "@/components/consent/CookieBanner";
import TopNav from "@/components/layout/TopNav";

import type { Metadata } from "next";

const siteUrl = "https://p2i.ai";

const siteTitle = "Power2Idea AI — Applied AI Products & Research";
const siteDescription =
  "Wedge products that turn rules into shipping checks.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Power2Idea AI",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krishna Srinivasmurthy",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/krishnaprasad1",
      "https://github.com/skprasadu",
      "https://patents.google.com/?inventor=Krishna+Srinivasmurthy",
    ],
    jobTitle: "Applied AI Products & Research",
    description:
      "Wedge products that turn rules into shipping checks.",
  };

  return (
    <html lang="en">
      <body>
        <div className="container">
          <header
            style={{
              position: "relative",
              padding: "18px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/" className="brandMark" aria-label="P2I.ai home">
              <span>Power2Idea AI</span>
            </Link>

            <TopNav />
          </header>

          {children}

          <footer className="hr" style={{ marginTop: 40, paddingTop: 18 }}>
            <div style={{ color: "rgba(11, 15, 23, 0.65)", fontSize: 13 }}>
              © {new Date().getFullYear()} Power2Idea AI — Applied AI Products & Research
            </div>
          </footer>
        </div>

        <GoogleAnalytics />
        <CookieBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}