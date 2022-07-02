import Link from "next/link";

import SEO from "../components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        description="Influx UI is a component library built on top of Tailwind CSS."
        url="https://influx-ui.durk.dev"
      />

      <div className="absolute left-0 top-0 flex flex-col items-center justify-center space-y-8 h-full min-h-screen w-full min-w-[100vw] bg-gradient-to-br from-[#00E5FF] to-[#D500F9]">
        <h1 className="mx-6 text-4xl font-bold text-center text-white">
          Influx UI
        </h1>
        <p className="mx-6 text-center text-white sub-text">
          Influx UI is a component library built on top of Tailwind CSS.
        </p>

        <div className="mx-6 remark-highlight max-w-[calc(100vw-3rem)]">
          <pre className="rounded language-jsx">
            <code className="language-jsx">
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>a
                </span>{" "}
                <span className="token attr-name">class</span>
                <span className="token attr-value">
                  <span className="token punctuation attr-equals">=</span>
                  <span className="token punctuation">{'"'}</span>button
                  <span className="token punctuation">{'"'}</span>
                </span>{" "}
                <span className="token attr-name">href</span>
                <span className="token attr-value">
                  <span className="token punctuation attr-equals">=</span>
                  <span className="token punctuation">{'"'}</span>
                  /getting-started
                  <span className="token punctuation">{'"'}</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token plain-text">Get Started</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>a
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
            </code>
          </pre>
        </div>

        <Link href="/getting-started">
          <a className="button">Get Started</a>
        </Link>
      </div>
    </>
  );
};

export default Index;
