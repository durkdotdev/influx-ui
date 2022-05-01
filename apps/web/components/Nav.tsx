import Link from "next/link";
import { FiGithub } from "react-icons/fi";

import Menu from "./Menu";

const Nav = () => {
  return (
    <nav className="nav nav-between sticky left-0 top-0">
      <Link href="/">
        <a className="link-text">Influx UI</a>
      </Link>

      <ul className="flex items-center space-x-4">
        <li className="hidden md:block">
          <Link href="/getting-started">
            <a className="p-2 sub-text sub-text-alt hover:bg-gray-200 rounded">
              Get Started
            </a>
          </Link>
        </li>

        <li>
          <a
            className="block p-2 text-gray-600 hover:bg-gray-200 rounded"
            href="https://github.com/durkdotdev/influx-ui"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub className="h-4 w-4" />
          </a>
        </li>

        <li>
          <Menu />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
