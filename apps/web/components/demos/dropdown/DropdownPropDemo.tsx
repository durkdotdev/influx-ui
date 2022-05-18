import { useState } from "react";

interface DropdownPropDemoProps {
  dropdownProp: string;
  dropdownTitle: string;
  hideTitle?: boolean;
}

const DropdownPropDemo = ({
  dropdownProp,
  dropdownTitle,
  hideTitle = false
}: DropdownPropDemoProps) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div className="dropdown-container">
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        {dropdownTitle}{hideTitle ? "" : " Dropdown"}
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
