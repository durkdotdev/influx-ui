import { useState } from "react";

const ModalDemo = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <>
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        Show Modal
      </button>

      {isShown && (
        <>
          <div
            className="overlay cursor-pointer"
            onClick={() => setIsShown(!isShown)}
          />

          <div className="modal">Modal content...</div>
        </>
      )}
    </>
  );
};

export default ModalDemo;
