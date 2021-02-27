import React, { useState, useContext } from "react";
import boardBuilder from "../utilities/boardBuilder";
import { number } from "prop-types";

const GameContext = React.createContext();

export const useGame = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children, boardSize }) => {
  const [board, updateBoard] = useState(boardBuilder(boardSize));
  const [currentHex, updateCurrentHex] = useState(null);

  const selectHex = ({ hexPos }) => {
    if (board[hexPos[0]][hexPos[1]] !== 1) {
      return;
    }

    updateCurrentHex(hexPos);
  };

  const makeMove = ({ hexPos, playerColor }) => {
    if (board[hexPos[0]][hexPos[1]] !== 0) {
      return;
    }

    const newBoard = [...board];

    newBoard[hexPos[0]][hexPos[1]] = playerColor;

    updateBoard(newBoard);
    updateCurrentHex(null);
  };

  return (
    <GameContext.Provider
      value={{
        currentHex,
        updateCurrentHex,
        updateBoard,
        selectHex,
        makeMove
      }}
    >
      {children({ board })}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  boardSize: number.isRequired
};
