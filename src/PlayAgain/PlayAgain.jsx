import React from "react";
import { useGame } from "../contexts/GameContext";
import { func } from "prop-types";

import * as S from "./styled";

const PlayAgain = ({ updateIsGameStarted }) => {
  const { isGameOver, updateIsGameOver, playersCells } = useGame();

  const handleClick = () => {
    updateIsGameStarted(false);
    updateIsGameOver(false);
  };

  const gameStatus =
    (playersCells.player === playersCells.enemy && "Draw") ||
    (playersCells.player > playersCells.enemy ? "You Win" : "You Lose");

  return (
    <>
      {isGameOver && (
        <S.ModalWrapper isOpen>
          <S.ScoreWrapper>
            <S.ScoreHex />
            <S.Score>{playersCells.player}</S.Score>
          </S.ScoreWrapper>
          <S.ScoreWrapper enemy>
            <S.ScoreHex enemy />
            <S.Score enemy>{playersCells.enemy}</S.Score>
          </S.ScoreWrapper>
          <S.GameStatus gameStatus={gameStatus}>{gameStatus}</S.GameStatus>
          <S.RetryButton onClick={handleClick}>Play Again</S.RetryButton>
        </S.ModalWrapper>
      )}
    </>
  );
};

PlayAgain.propTypes = {
  updateIsGameStarted: func.isRequired
};

export default PlayAgain;
