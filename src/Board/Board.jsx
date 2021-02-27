import React from "react";
import HexRow from "../HexRow";
import { GameProvider } from "../contexts/GameContext";

import * as S from "./styled";

const Board = ({ boardSize }) => {
  return (
    <GameProvider boardSize={boardSize}>
      {({ board }) => (
        <S.BoardWrapper>
          {console.log(board)}
          {board.map((hexes, index) => (
            <HexRow hexes={hexes} rowIndex={index} key={index} />
          ))}
        </S.BoardWrapper>
      )}
    </GameProvider>
  );
};

export default Board;
