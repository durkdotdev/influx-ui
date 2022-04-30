import { useState } from "react";

const OverlayDemo = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <>
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        Show Overlay
      </button>

      {isShown && (
        <div
          className="overlay cursor-pointer"
          onClick={() => setIsShown(!isShown)}
        />
      )}
    </>
  );
};

export default OverlayDemo;
