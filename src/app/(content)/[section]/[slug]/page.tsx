import { notFound } from "next/navigation";

import MDXRenderer from "@/components/MDXRenderer";
import Section from "@/components/Section";
import type { ContentSection } from "@/generated/contentIndex";
import { getItem, getItemsBySection, getSections } from "@/lib/content";

import type { Metadata } from "next";

export function generateStaticParams() {
  const params: Array<{ section: string; slug: string }> = [];
  for (const section of getSections()) {
    for (const it of getItemsBySection(section)) {
      params.push({ section, slug: it.slug });
    }
  }
  return params;
}

// ✅ Next 16: params can be a Promise, so await it
export async function generateMetadata(
  { params }: { params: Promise<{ section: string; slug: string }> }
): Promise<Metadata> {
  const { section, slug } = await params;

  if (!getSections().includes(section as ContentSection)) return {};
  const it = getItem(section as ContentSection, slug);
  if (!it) return {};

  return {
    title: it.title,
    description: it.description,
  };
}

// ✅ Next 16: params can be a Promise, so await it
export default async function ContentDetailPage(
  { params }: { params: Promise<{ section: string; slug: string }> }
) {
  const { section, slug } = await params;

  if (!getSections().includes(section as ContentSection)) return notFound();

  const it = getItem(section as ContentSection, slug);
  if (!it) return notFound();

  return (
    <main>
      <Section title={it.title}>
        <div className="card" style={{ marginBottom: 14 }}>
          <p>{it.description}</p>

          <div style={{ marginTop: 10, color: "rgba(11,15,23,0.55)", fontSize: 13 }}>
            {it.date ? new Date(it.date).toDateString() : "—"}
            {it.tags?.length ? ` • ${it.tags.join(", ")}` : ""}
          </div>

          {it.repo ? (
            <div style={{ marginTop: 12 }}>
              <a className="btn btnSecondary" href={it.repo} target="_blank" rel="noreferrer">
                Repository
              </a>
            </div>
          ) : null}
        </div>

        <MDXRenderer filePath={it.sourcePath} />
      </Section>
    </main>
  );
}