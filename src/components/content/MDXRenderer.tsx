import fs from "node:fs";

import { compileMDX } from "next-mdx-remote/rsc";

import MermaidImage from "@/components/content/MermaidImage";

export default async function MDXRenderer(props: { filePath: string }) {
  const source = fs.readFileSync(props.filePath, "utf8");

  const { content } = await compileMDX({
    source,
    components: {
      MermaidImage,
    },
    options: {
      parseFrontmatter: false,
    },
  });

  return <article>{content}</article>;
}