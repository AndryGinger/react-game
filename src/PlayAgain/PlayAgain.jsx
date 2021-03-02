import React from "react";
import { useGame } from "../contexts/GameContext";
import { func } from "prop-types";

import * as S from "./styled";

const PlayAgain = ({ updateIsGameStarted }) => {
  const { isGameOver, updateIsGameOver } = useGame();

  const handleClick = () => {
    updateIsGameStarted(false);
    updateIsGameOver(false);
  };

  return (
    <>
      {isGameOver && (
        <S.ModalWrapper isOpen>
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
