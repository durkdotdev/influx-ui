import "influx-ui/dist/influx-ui.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/highlight.css";

import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";

import DropdownDemo from "../components/demos/dropdown/DropdownDemo";
import DropdownLinkDemo from "../components/demos/dropdown/DropdownLinkDemo";
import DropdownPropDemo from "../components/demos/dropdown/DropdownPropDemo";
import FixedContainerDemo from "../components/demos/FixedContainerDemo";
import LabelHorizontalDemo from "../components/demos/LabelHorizontalDemo";
import ModalDemo from "../components/demos/ModalDemo";
import OverlayDemo from "../components/demos/OverlayDemo";
import PopupDemo from "../components/demos/PopupDemo";
import SidebarDemo from "../components/demos/sidebar/SidebarDemo";
import SidebarLinkDemo from "../components/demos/sidebar/SidebarLinkDemo";
import SidebarPropDemo from "../components/demos/sidebar/SidebarPropDemo";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SidebarMenu from "../components/SidebarMenu";

const components = {
  DropdownDemo,
  DropdownLinkDemo,
  DropdownPropDemo,
  FixedContainerDemo,
  LabelHorizontalDemo,
  ModalDemo,
  OverlayDemo,
  PopupDemo,
  SidebarDemo,
  SidebarLinkDemo,
  SidebarPropDemo
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => {
  return (
    <MDXProvider components={components}>
      <Nav />
      <div className="flex flex-1">
        <SidebarMenu prop="sidebar-mobile-lg !z-0 !top-16 !pt-4 !pb-24 !shadow-none border-r" />
        <div className="px-6 pt-8 pb-12 mx-auto md:px-8 lg:px-12 md:pb-16">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </MDXProvider>
  );
};

export default MyApp;
