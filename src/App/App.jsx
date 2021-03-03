import React, { useState } from "react";
import Board from "../Board";
import GameMenu from "../GameMenu";
import PlayAgain from "../PlayAgain";
import GithubLogo from "../assets/images/github_logo.png";
import RsSchoolLogo from "../assets/images/rs_school_js.svg";
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
        <S.Footer>
          <S.FooterLink href="https://rs.school/js" target="_blank">
            <S.Logo src={RsSchoolLogo} />
          </S.FooterLink>
          <S.FooterText>2021</S.FooterText>
          <S.FooterLink href="https://github.com/AndryGinger" target="_blank">
            <S.Logo src={GithubLogo} />
          </S.FooterLink>
        </S.Footer>
      </S.GameWrapper>
    </>
  );
}
