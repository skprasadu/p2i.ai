export type FeaturedConfig = {
    research: { section: "research"; slug: string };
    products: { section: "products"; slug: string };
    notes: { section: "notes"; slug: string };
};

export const featured: FeaturedConfig = {
    research: { section: "research", slug: "apple-edge-llm-lab" },
    products: { section: "products", slug: "swiftui-a11y-lint" },
    notes: { section: "notes", slug: "workbench-learnings-01" },
};