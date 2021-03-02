import React, { useState } from "react";
import * as S from "./styled";
import { number, func } from "prop-types";

const GameMenu = ({ boardSize, updateBoardSize, updateIsGameStarted }) => {
  const [isOpen, updateIsOpen] = useState(true);
  const onPlay = () => {
    updateIsOpen(false);
    updateIsGameStarted(true);
  };

  return (
    <S.GameMenu isOpen={isOpen}>
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
        <S.PlayButton onClick={onPlay}>Play</S.PlayButton>
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
