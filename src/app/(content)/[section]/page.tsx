import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { getItemsBySection, getSections } from "@/lib/content";

function titleize(x: unknown): string {
  const s = typeof x === "string" ? x : "";
  if (!s) return "Content";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function generateStaticParams() {
  return getSections().map((section) => ({ section }));
}

// ✅ params is async in Next 16 (Turbopack) for some routes
export async function generateMetadata(
  { params }: { params: Promise<{ section?: string }> }
): Promise<Metadata> {
  const { section } = await params;
  if (!section) return { title: "Content" };

  if (!getSections().includes(section as any)) {
    return { title: "Not found" };
  }

  return {
    title: titleize(section),
    description: `p2i.ai ${section} posts`,
  };
}

// ✅ Make page async and await params
export default async function ContentSectionPage(
  { params }: { params: Promise<{ section?: string }> }
) {
  const { section } = await params;
  if (!section) return notFound();

  const allowed = getSections();
  if (!allowed.includes(section as any)) return notFound();

  const items = getItemsBySection(section as any);

  return (
    <main>
      <Section title={titleize(section)}>
        {items.length === 0 ? (
          <div className="card">
            <p>No posts yet.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {items.map((it) => (
              <a key={it.slug} className="card" href={`/${section}/${it.slug}`}>
                <div style={{ fontSize: 18, fontWeight: 800 }}>{it.title}</div>
                <p style={{ marginTop: 8 }}>{it.description}</p>
                <div style={{ marginTop: 10, color: "rgba(11,15,23,0.55)", fontSize: 13 }}>
                  {it.date ? new Date(it.date).toDateString() : "—"}
                  {it.tags?.length ? ` • ${it.tags.slice(0, 3).join(", ")}` : ""}
                </div>
              </a>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}