import { contentIndex, type ContentItem, type ContentSection } from "@/generated/contentIndex";

export function getSections(): ContentSection[] {
  return ["research", "projects", "products", "notes"];
}

export function getPublishedItems(): ContentItem[] {
  return contentIndex.filter((x) => x.status === "published");
}

export function getItemsBySection(section: ContentSection): ContentItem[] {
  return getPublishedItems().filter((x) => x.section === section);
}

export function getItem(section: ContentSection, slug: string): ContentItem | null {
  return getPublishedItems().find((x) => x.section === section && x.slug === slug) ?? null;
}