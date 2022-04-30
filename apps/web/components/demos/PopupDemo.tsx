import { useState } from "react";

const PopupDemo = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        Open Popup
      </button>

      {isShown && (
        <div className="popup">
          <button className="popup-close" onClick={() => setIsShown(!isShown)}>
            Close
          </button>
          Popup content...
        </div>
      )}
    </div>
  );
};

export default PopupDemo;
