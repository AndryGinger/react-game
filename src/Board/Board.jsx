import React from "react";
import Hex from "../Hex";
import HexRow from "../HexRow";

import * as S from "./styled";

const Board = () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0],
  ];

  return (
    <>
      <h1>Hexagon</h1>
      <S.BoardWrapper>
        {board.map((hexes, index) => (
          <HexRow hexes={hexes} key={index} />
        ))}
      </S.BoardWrapper>
    </>
  );
};

export default Board;
