import React, { useState } from "react";
import Board from "../Board";
import GameMenu from "../GameMenu";

import * as S from "./styled";

export default function App() {
  const [boardSize, updateBoardSize] = useState(3);
  const [isGameStarted, updateIsGameStarted] = useState(false);

  return (
    <>
      <S.GlobalStyle />
      <S.GameWrapper>
        <GameMenu
          updateIsGameStarted={updateIsGameStarted}
          boardSize={boardSize}
          updateBoardSize={updateBoardSize}
        />
        {isGameStarted && <Board boardSize={boardSize} />}
      </S.GameWrapper>
    </>
  );
}

module.hot.accept();
