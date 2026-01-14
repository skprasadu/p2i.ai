import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card">
      <div style={{ fontSize: 18, fontWeight: 700 }}>{p.title}</div>
      <p style={{ marginTop: 8 }}>{p.desc}</p>
      <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: "var(--muted)" }}>
        {p.highlights.map((h) => (
          <li key={h} style={{ margin: "6px 0" }}>{h}</li>
        ))}
      </ul>
      {p.href ? (
        <div style={{ marginTop: 12 }}>
          <a className="btn" href={p.href} target="_blank" rel="noreferrer">Open</a>
        </div>
      ) : null}
    </div>
  );
}