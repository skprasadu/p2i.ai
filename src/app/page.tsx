import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="hr" />

      <Section title="What this site is">
        <div className="card">
          <p>
            A fast, indexable shell with a WebGL engine inside it.
            The goal: communicate engineering taste through interaction, not buzzwords.
          </p>
        </div>
      </Section>
      <div className="hr" />

      <Section title="Featured work">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
        <div style={{ marginTop: 14 }}>
          <a className="btn" href="/projects">All projects</a>
        </div>
      </Section>

      <div className="hr" />
      <ContactSection />
    </main>
  );
}