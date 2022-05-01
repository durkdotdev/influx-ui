import { useState } from "react";

const SidebarLinkDemo = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        Show Sidebar
      </button>

      {isShown && (
        <>
          <div
            className="overlay cursor-pointer"
            onClick={() => setIsShown(!isShown)}
          />

          <div className="sidebar">
            <a className="sidebar-link" href="#">
              Account Settings
            </a>
            <a className="sidebar-link" href="#">
              Sign Out
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarLinkDemo;
