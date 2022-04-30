import { useState } from "react";

interface ComponentProps {
  position: string;
}

const FixedContainerDemo = ({ position }: ComponentProps) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const classes = `fixed-container fixed-container-${position}`;

  return (
    <>
      <button
        className="button button-light"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? "Hide Fixed Container" : "Show Fixed Container"}
      </button>

      {isShown && (
        <div className={classes}>
          <button className="button" onClick={() => setIsShown(!isShown)}>
            Always on the{position === "bottom" ? " Bottom" : " Top"}
          </button>
        </div>
      )}
    </>
  );
};

export default FixedContainerDemo;
