import { getPublishedItems } from "@/lib/content";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://p2i.ai";
  const items = getPublishedItems();

  return [
    { url: `${base}/`, lastModified: new Date() },

    // content hubs
    { url: `${base}/research`, lastModified: new Date() },
    { url: `${base}/products`, lastModified: new Date() },
    { url: `${base}/notes`, lastModified: new Date() },

    // content details
    ...items.map((it) => ({
      url: `${base}/${it.section}/${it.slug}`,
      lastModified: it.date ? new Date(it.date) : new Date(),
    })),
  ];
}