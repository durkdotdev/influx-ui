import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import SEO from "../components/SEO";
// import SEO from "../../components/SEO";
import { serializeMarkdown } from "../lib/markdown";
import { getAllPages, getPage } from "../lib/markdown";

interface ProjectPageProps {
  page: {
    description: string;
    slug: string;
    title: string;
  };
  source: MDXRemoteSerializeResult;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getAllPages();
  return {
    paths: pages.map((page) => {
      return { params: { slug: page.slug } };
    }),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const page = getPage(params.slug as string);
  const source = await serializeMarkdown(page.markdown);
  return {
    props: {
      page: page.metadata,
      source
    }
  };
};

export default function ProjectPage({ page, source }: ProjectPageProps) {
  return (
    <>
      <SEO
        description={page.description}
        title={page.title}
        url={`https://influx-ui.durk.dev/${page.slug}`}
      />
      <article className="w-screen prose">
        <MDXRemote {...source} />
      </article>
    </>
  );
}
