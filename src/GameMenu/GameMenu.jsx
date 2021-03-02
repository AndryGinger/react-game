import React from "react";
import { number, func } from "prop-types";

import * as S from "./styled";

const GameMenu = ({
  boardSize,
  updateBoardSize,
  isGameStarted,
  updateIsGameStarted
}) => {
  return (
    <S.GameMenu isOpen={!isGameStarted}>
      <S.MenuWrapper>
        <S.BoardSize>
          <S.InputLabel htmlFor="board-size">
            Board Size: {boardSize}
          </S.InputLabel>
          <S.RangeInputIndicator>3</S.RangeInputIndicator>
          <S.Input
            type="range"
            min="3"
            max="7"
            value={boardSize}
            id="board-size"
            onChange={(event) => updateBoardSize(parseInt(event.target.value))}
          ></S.Input>
          <S.RangeInputIndicator>7</S.RangeInputIndicator>
        </S.BoardSize>
        <S.PlayButton onClick={() => updateIsGameStarted(true)}>
          Play
        </S.PlayButton>
      </S.MenuWrapper>
    </S.GameMenu>
  );
};

GameMenu.propTypes = {
  boardSize: number.isRequired,
  updateBoardSize: func.isRequired,
  updateIsGameStarted: func.isRequired
};

export default GameMenu;
