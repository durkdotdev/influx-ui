import Link from "next/link";
import { FiGithub } from "react-icons/fi";

import Menu from "./Menu";

const Nav = () => {
  return (
    <nav className="sticky top-0 left-0 nav nav-between">
      <Link href="/">
        <a className="link-text">Influx UI</a>
      </Link>

      <ul className="flex items-center space-x-4">
        <li className="hidden md:block">
          <Link href="/getting-started">
            <a className="p-2 rounded sub-text sub-text-alt hover:bg-gray-200">
              Get Started
            </a>
          </Link>
        </li>

        <li>
          <a
            className="block p-2 text-gray-600 rounded hover:bg-gray-200"
            href="https://github.com/durkdotdev/influx-ui"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub className="w-4 h-4" />
          </a>
        </li>

        <li className="lg:hidden">
          <Menu />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
