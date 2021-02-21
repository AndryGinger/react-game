import React, { useState } from "react";
import Board from "../Board";

export default function App() {
  const [boardSize, updateBoardSize] = useState(3);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hexagon</h1>
      <input
        type="number"
        onChange={(event) => updateBoardSize(parseInt(event.target.value))}
        min="3"
        max="7"
        value={boardSize}
      />
      <Board boardSize={boardSize} />
    </>
  );
}

module.hot.accept();
