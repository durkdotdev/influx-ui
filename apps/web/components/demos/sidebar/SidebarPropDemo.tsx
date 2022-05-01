import { useState } from "react";

interface SidebarPropDemoProps {
  sidebarProp: string;
  sidebarTitle: string;
}

const SidebarPropDemo = ({
  sidebarProp,
  sidebarTitle
}: SidebarPropDemoProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        {sidebarTitle} Sidebar
      </button>

      {isShown && (
        <>
          <div
            className="overlay cursor-pointer"
            onClick={() => setIsShown(!isShown)}
          />

          <div className={`sidebar sidebar-${sidebarProp}`}>
            Sidbar content...
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarPropDemo;
