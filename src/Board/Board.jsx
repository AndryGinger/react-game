import React from "react";
import HexRow from "../HexRow";

import * as S from "./styled";

const Board = ({ board }) => {
  return (
    <S.BoardWrapper>
      {board.map((hexes, index) => (
        <HexRow hexes={hexes} rowIndex={index} key={index} />
      ))}
    </S.BoardWrapper>
  );
};

export default Board;
