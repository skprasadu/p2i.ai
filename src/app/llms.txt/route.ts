import { getPublishedItems } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const base = "https://p2i.ai";
  const items = getPublishedItems();

  const lines: string[] = [];
  lines.push("p2i.ai — Krishna Srinivasmurthy");
  lines.push("Purpose: publish high-signal research, projects, products, and notes.");
  lines.push("");
  lines.push("Author:");
  lines.push("- Name: Krishna Srinivasmurthy");
  lines.push("- GitHub: https://github.com/skprasadu");
  lines.push("- LinkedIn: https://www.linkedin.com/in/krishnaprasad1");
  lines.push("- Patents: https://patents.google.com/?inventor=Krishna+Srinivasmurthy");
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
      "cache-control": "public, max-age=3600",
    },
  });
}