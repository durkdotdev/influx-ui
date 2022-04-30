import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <meta name="robots" content="follow, index" />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/durk-dev/image/upload/v1651298286/influx-ui-cover_muv7fn.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@durkdotdev" />
          <meta name="apple-mobile-web-app-title" content="Influx UI" />
        </Head>
        <body className="items-center selection:bg-fuchsia-400 selection:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
