import ContactSection from "@/components/ContactSection";
import CtaBucket from "@/components/CtaBucket";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
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
            label="Research"
            section="research"
            featured={fResearch}
            blurb="Benchmarks, deep dives, and reproducible experiments across Apple Silicon, inference, and GPU systems."
          />
          <CtaBucket
            label="Products"
            section="products"
            featured={fProducts}
            blurb="Tools that ship. Open-source wedges and commercial productization notes—without leaking IP."
          />
          <CtaBucket
            label="Notes"
            section="notes"
            featured={fNotes}
            blurb="Short field notes: what I tried, what worked, what didn’t, and what I’m doing next."
          />
        </div>
      </Section>

      <div className="hr" />
      <ContactSection />
    </main>
  );
}