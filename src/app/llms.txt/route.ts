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
  lines.push("Power2Idea AI");
  lines.push("Purpose: build deterministic AI GitHub Actions that convert policy and rules into AST-backed PR checks.");
  lines.push("Focus: product-first. Research and notes support validation, credibility, and reproducibility.");
  lines.push("");
  lines.push("Author:");
  lines.push("- Name: Krishna Srinivasmurthy");
  lines.push("- GitHub: https://github.com/skprasadu");
  lines.push("- LinkedIn: https://www.linkedin.com/in/krishnaprasad1");
  lines.push("- Patents: https://patents.google.com/?inventor=Krishna+Srinivasmurthy");
  lines.push("");
  lines.push("Hubs:");
  lines.push(`- Products: ${base}/products`);
  lines.push(`- Research: ${base}/research`);
  lines.push(`- Notes: ${base}/notes`);
  lines.push(`- Sitemap: ${base}/sitemap.xml`);
  lines.push("");
  const last = items
    .map((x) => x.date ? Date.parse(x.date) : 0)
    .reduce((a, b) => Math.max(a, b), 0);

  if (last) lines.push(`Last updated: ${new Date(last).toISOString()}`);
  lines.push("");
  lines.push("Content index:");

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