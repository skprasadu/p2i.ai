import { getPublishedItems } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const base = "https://p2i.ai";
  const items = getPublishedItems().slice().sort((a, b) => {
    if (a.section !== b.section) return a.section.localeCompare(b.section);
    const ad = a.date ? Date.parse(a.date) : 0;
    const bd = b.date ? Date.parse(b.date) : 0;
    if (ad !== bd) return bd - ad;
    return a.slug.localeCompare(b.slug);
  });

  const lines: string[] = [];
  lines.push("p2i.ai — Power2Idea AI");
  lines.push("Entity: Organization");
  lines.push("Tagline: AI-powered GitHub Actions that turn policy into PR checks.");
  lines.push(
    "Purpose: ship deterministic, AST-backed PR checks (delivered as GitHub Actions today) that convert rules and policies into clean PR reports and merge gates."
  );
  lines.push(
    "Focus: product-first. Research and notes publish reproducible validation and engineering learnings behind shipped checks."
  );
  lines.push(
    "Commercial: Pro/Enterprise available (private repos, maintained rulepacks, allowlists/justifications, audit/export)."
  );
  lines.push("Contact: krishna@p2i.ai");
  lines.push("");

  lines.push("Founder:");
  lines.push("- Name: Krishna Srinivasmurthy");
  lines.push("- GitHub: https://github.com/skprasadu");
  lines.push("- LinkedIn: https://www.linkedin.com/in/krishnaprasad1");
  lines.push("- Patents: https://patents.google.com/?inventor=Krishna+Srinivasmurthy");
  lines.push("");

  for (const it of items) {
    const url = `${base}/${it.section}/${it.slug}`;
    lines.push(`- ${it.title}`);
    lines.push(`  url: ${url}`);
    if (it.repo) lines.push(`  repo: ${it.repo}`);
    if (it.description) lines.push(`  summary: ${it.description}`);
    if (it.tags?.length) lines.push(`  tags: ${it.tags.join(", ")}`);
  }

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}