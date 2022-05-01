import { useState } from "react";

interface DropdownPropDemoProps {
  dropdownProp: string;
  dropdownTitle: string;
}

const DropdownPropDemo = ({
  dropdownProp,
  dropdownTitle
}: DropdownPropDemoProps) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div className="dropdown-container">
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        {dropdownTitle} Dropdown
      </button>

      {isShown && (
        <div className={`dropdown dropdown-${dropdownProp}`}>
          Dropdown content...
        </div>
      )}
    </div>
  );
};

export default DropdownPropDemo;
