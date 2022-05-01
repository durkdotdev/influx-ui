import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

const SEO = ({ title, description, url }: SEOProps) => {
  return (
    <Head>
      <title>{title ? `${title} | Influx UI` : "Influx UI"}</title>

      {description && (
        <>
          <meta
            name="description"
            content={
              description
                ? description
                : "Influx UI is a simple component library build on top of Tailwind CSS."
            }
          />
          <meta
            name="og:description"
            content={
              description
                ? description
                : "Influx UI is a simple component library build on top of Tailwind CSS."
            }
          />
        </>
      )}
      {title && (
        <meta
          name="og:title"
          content={title ? `${title} | Influx UI` : "Influx UI"}
        />
      )}
      {url && <meta property="og:url" content={url} />}
    </Head>
  );
};

export default SEO;
