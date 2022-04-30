import "influx-ui/dist/influx-ui.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/highlight.css";

import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";

import DropdownDemo from "../components/demos/dropdown/DropdownDemo";
import DropdownLinkDemo from "../components/demos/dropdown/DropdownLinkDemo";
import DropdownPropDemo from "../components/demos/dropdown/DropdownSizesDemo";
import FixedContainerDemo from "../components/demos/FixedContainerDemo";
import LabelHorizontalDemo from "../components/demos/LabelHorizontalDemo";
import ModalDemo from "../components/demos/ModalDemo";
import OverlayDemo from "../components/demos/OverlayDemo";
import PopupDemo from "../components/demos/PopupDemo";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const components = {
  DropdownDemo,
  DropdownLinkDemo,
  DropdownPropDemo,
  FixedContainerDemo,
  LabelHorizontalDemo,
  ModalDemo,
  OverlayDemo,
  PopupDemo
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => {
  return (
    <MDXProvider components={components}>
      <Nav />
      <div className="flex-1 mx-auto prose pt-28 pb-24 px-6">
        <Component {...pageProps} />
      </div>
      <Footer />
    </MDXProvider>
  );
};

export default MyApp;
