import React from "react";
import Hex from "../Hex";
import HexRow from "../HexRow";
import boardBuilder from "../utilities/boardBuilder";

import * as S from "./styled";

const Board = ({ boardSize }) => {
  const board = boardBuilder(boardSize);

  return (
    <>
      <S.BoardWrapper>
        {board.map((hexes, index) => (
          <HexRow hexes={hexes} key={index} />
        ))}
      </S.BoardWrapper>
    </>
  );
};

export default Board;
