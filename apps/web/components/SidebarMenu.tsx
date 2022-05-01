import Link from "next/link";
import { useRouter } from "next/router";

import { linkComponents, linksBottom, linksTop } from "../lib/links";
import { whitelistSidebarRoutes } from "../lib/routes";

interface SidebarMenuProps {
  prop: string;
}

const SidebarMenu = ({ prop }: SidebarMenuProps) => {
  const router = useRouter();

  if (whitelistSidebarRoutes.includes(router.pathname)) return null;

  return (
    <div className={`sidebar${prop ? " " + prop : ""} sidebar-scroll`}>
      {linksTop.map((sidebarLink) => (
        <Link href={sidebarLink.href} key={sidebarLink.title}>
          <a className="sidebar-link">{sidebarLink.title}</a>
        </Link>
      ))}

      <div className="divider" />

      {linkComponents.map((sidebarLink) => (
        <Link href={sidebarLink.href} key={sidebarLink.title}>
          <a className="sidebar-link">{sidebarLink.title}</a>
        </Link>
      ))}

      <div className="divider" />

      {linksBottom.map((sidebarLink) => (
        <Link href={sidebarLink.href} key={sidebarLink.title}>
          <a className="sidebar-link">{sidebarLink.title}</a>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
