import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
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
    next?: string;
    prev?: string;
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
      <article className="w-[calc(100vw-3rem)] prose">
        <MDXRemote {...source} />
      </article>
      <div className="mt-24 flex items-center justify-between">
        {page.prev ? (
          <Link href={`/${page.prev.replace(" ", "-").toLowerCase()}`}>
            <a className="group flex flex-col space-y-1">
              <span className="sub-text sub-text-alt">Previous</span>
              <span className="p-2 text-gray-600 group-hover:bg-gray-200 rounded">
                {page.prev}
              </span>
            </a>
          </Link>
        ) : (
          <div />
        )}

        {page.next ? (
          <Link href={`/${page.next.replace(" ", "-").toLowerCase()}`}>
            <a className="group flex flex-col space-y-1 text-right">
              <span className="sub-text sub-text-alt">Next</span>
              <span className="p-2 text-gray-600 group-hover:bg-gray-200 rounded">
                {page.next}
              </span>
            </a>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
