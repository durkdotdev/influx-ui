import { useState } from "react";

const SidebarDemo = () => {
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

          <div className="sidebar">Sidbar content...</div>
        </>
      )}
    </div>
  );
};

export default SidebarDemo;
