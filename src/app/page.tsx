import ContactSection from "@/components/layout/ContactSection";
import Section from "@/components/layout/Section";
import CtaBucket from "@/components/marketing/CtaBucket";
import Hero from "@/components/marketing/Hero";
import { featured } from "@/config/featured";
import { getItem } from "@/lib/content";

export default function HomePage() {
  const fResearch = getItem(featured.research.section, featured.research.slug);
  const fProducts = getItem(featured.products.section, featured.products.slug);
  const fNotes = getItem(featured.notes.section, featured.notes.slug);

  // Hard fail loudly if featured config is wrong
  if (!fResearch || !fProducts || !fNotes) {
    throw new Error("Featured content missing. Check src/config/featured.ts and content slugs.");
  }

  return (
    <main>
      <Hero />
      <div className="hr" />

      <Section title="Start here">
        <div className="startHereGrid">
          <CtaBucket
            label="Products"
            section="products"
            featured={fProducts}
            blurb="Shipping GitHub Actions that turn policies into deterministic PR checks with clean reports."
          />
          <CtaBucket
            label="Research"
            section="research"
            featured={fResearch}
            blurb="R&D that validates new checks: AST parsing, policy packs, and deterministic evaluation."
          />
          <CtaBucket
            label="Notes"
            section="notes"
            featured={fNotes}
            blurb="Short build logs and release notes as tools ship and evolve."
          />
        </div>
      </Section>

      <div className="hr" />
      <ContactSection />
    </main>
  );
}