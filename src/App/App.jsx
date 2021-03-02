import React, { useState } from "react";
import Board from "../Board";
import GameMenu from "../GameMenu";
import PlayAgain from "../PlayAgain";
import { GameProvider } from "../contexts/GameContext";

import * as S from "./styled";

export default function App() {
  const [boardSize, updateBoardSize] = useState(3);
  const [isGameStarted, updateIsGameStarted] = useState(false);

  return (
    <>
      <S.GlobalStyle />
      <S.GameWrapper>
        <GameMenu
          isGameStarted={isGameStarted}
          updateIsGameStarted={updateIsGameStarted}
          boardSize={boardSize}
          updateBoardSize={updateBoardSize}
        />
        {isGameStarted && (
          <GameProvider boardSize={boardSize}>
            {({ board }) => (
              <>
                <Board board={board} />
                <PlayAgain updateIsGameStarted={updateIsGameStarted} />
              </>
            )}
          </GameProvider>
        )}
      </S.GameWrapper>
    </>
  );
}

module.hot.accept();
