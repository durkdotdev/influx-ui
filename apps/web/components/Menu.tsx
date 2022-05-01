import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import SidebarMenu from "./SidebarMenu";

const Menu = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <>
      <button
        className="p-2 text-gray-600 hover:bg-gray-200 rounded"
        onClick={() => setIsShown(!isShown)}
      >
        <HiMenu className="h-4 w-4" />
      </button>

      {isShown && (
        <>
          <div className="overlay" onClick={() => setIsShown(!isShown)} />

          <SidebarMenu prop="sidebar-right" />
        </>
      )}
    </>
  );
};

export default Menu;
