import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

export const serializeMarkdown = async (
  markdown: string
): Promise<MDXRemoteSerializeResult> => {
  return await serialize(markdown, {
    mdxOptions: {
      remarkPlugins: [require("remark-prism")]
    }
  });
};

export const getAllPages = () => {
  const files = fs.readdirSync(path.join("markdown"));
  return files.map((file) => {
    const fileContents = fs.readFileSync(path.join("markdown", file), "utf8");
    const { data } = matter(fileContents);
    return data;
  });
};

export const getPage = (slug: string) => {
  const fileContents = fs.readFileSync(
    path.join("markdown", `${slug}.mdx`),
    "utf-8"
  );
  const { content, data } = matter(fileContents);
  return { markdown: content, metadata: data };
};
