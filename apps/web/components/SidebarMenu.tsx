import Link from "next/link";

import { linkComponents, linksBottom, linksTop } from "../lib/links";

interface SidebarMenuProps {
  prop: string;
}

const SidebarMenu = ({ prop }: SidebarMenuProps) => {
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
