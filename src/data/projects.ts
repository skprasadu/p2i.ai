export type Project = {
  title: string;
  desc: string;
  highlights: string[];
  href?: string; // later: GitHub / demo
};

export const projects: Project[] = [
  {
    title: "Document Intelligence Pipeline",
    desc: "Multi-format ingestion → extraction → normalization → graph construction.",
    highlights: ["Batch + async", "Confidence scoring", "Neo4j-ready graph output"]
  },
  {
    title: "Graph + Vector Retrieval Stack",
    desc: "Hybrid retrieval patterns for deep, connected domain knowledge.",
    highlights: ["Qdrant + Neo4j", "Structured queries", "Production-minded design"]
  },
  {
    title: "Developer Workbench / Prompt Ops",
    desc: "Local-first tooling for prompt iteration, eval, diffing, and libraries.",
    highlights: ["TypeScript shell", "Registry patterns", "Low tech-debt"]
  }
];