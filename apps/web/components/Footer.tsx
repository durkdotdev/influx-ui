import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer flex-col space-y-2">
      <Link href="/footer">
        <a className="hover:underline">Influx UI</a>
      </Link>

      <span className="block sub-text sub-text-alt">
        Made with<span className="mx-2">🌎☄️💕</span>by{" "}
        <a
          className="hover:underline"
          href="https://twitter.com/durkdotdev"
          rel="noreferrer"
          target="_blank"
        >
          durkdotdev
        </a>
        .
      </span>
    </footer>
  );
};

export default Footer;
