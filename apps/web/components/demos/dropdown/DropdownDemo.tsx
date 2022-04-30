import { useState } from "react";

const DropdownDemo = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div className="dropdown-container">
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? "Close " : "Open "}Dropdown
      </button>

      {isShown && <div className="dropdown">Dropdown content...</div>}
    </div>
  );
};

export default DropdownDemo;
