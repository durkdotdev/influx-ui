import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="nav nav-between fixed left-0 top-0">
      <Link href="/">
        <a className="link-text">Influx UI</a>
      </Link>

      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/getting-started">
            <a className="p-2 sub-text hover:bg-gray-200 hover:underline rounded">
              Get Started
            </a>
          </Link>
        </li>

        <li>
          <a
            className="block p-2 text-gray-600 hover:bg-gray-200 rounded"
            href="https://github.com"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub className="h-4 w-4" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
