import { useState } from "react";

const DropdownLinkDemo = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div className="dropdown-container">
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? "Close " : "Open "}Dropdown
      </button>

      {isShown && (
        <div className="dropdown dropdown-right">
          <a className="dropdown-link" href="#">
            Account Settings
          </a>
          <a className="dropdown-link" href="#">
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownLinkDemo;
