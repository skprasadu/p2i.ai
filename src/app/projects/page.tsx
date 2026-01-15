import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected engineering projects and systems."
};

export default function ProjectsPage() {
  return (
    <main>
      <Section title="Projects">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </Section>
    </main>
  );
}