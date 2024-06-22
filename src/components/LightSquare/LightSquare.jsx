import React from "react";
import "./LightSquare.css";

import { useGameContext } from "../../context/GameContext";

const LightSquareComponent = ({
  row,
  col,
  isLit,
  toggleSquareHandler,
  start,
}) => {
  const clickHander = (e) => {
    if (start) {
      toggleSquareHandler(e);
    }
  };
  console.log(`render LightSquare ${row}-${col}`);
  return (
    <div
      className={`light-square ${isLit ? "lit" : ""}`}
      row={row}
      col={col}
      onClick={(e) => clickHander(e)}
    ></div>
  );
};

const LightSquare = React.memo(LightSquareComponent);

export default LightSquare;
