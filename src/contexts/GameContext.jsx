import React, { useState, useContext } from "react";
import boardBuilder from "../utilities/boardBuilder";
import { findAvailableCells, getEmptyCellsAround } from "../utilities/enemyAI";
import playersIndicators from "../constants/playersIndicators";
import _ from "lodash";
import { number } from "prop-types";

const GameContext = React.createContext();

export const useGame = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children, boardSize }) => {
  const [board, updateBoard] = useState(boardBuilder(boardSize));
  const [currentHex, updateCurrentHex] = useState(null);
  const [playerAvailableCells, updatePlayerAvailableCells] = useState([]);

  const selectHex = ({ hexPos }) => {
    if (board[hexPos[0]][hexPos[1]] !== 1) {
      return;
    }

    updateCurrentHex(hexPos);
    updatePlayerAvailableCells(
      getEmptyCellsAround({ x: hexPos[1], y: hexPos[0], board, withJump: true })
    );
  };

  const makeMove = ({ hexPos, playerColor }) => {
    const newBoard = [...board];

    newBoard[hexPos[0]][hexPos[1]] = playerColor;

    updateBoard(newBoard);
  };

  const enemyTurn = () => {
    const availableCells = findAvailableCells({
      board,
      playerColor: playersIndicators.enemy
    });
    const newEnemyCell = _.sample(availableCells);

    makeMove({ hexPos: newEnemyCell, playerColor: playersIndicators.enemy });
  };

  const makePlayerMove = ({ hexPos, playerColor }) => {
    if (board[hexPos[0]][hexPos[1]] !== 0) {
      return;
    }

    makeMove({ hexPos, playerColor });
    updateCurrentHex(null);
    updatePlayerAvailableCells([]);
    enemyTurn();
  };

  return (
    <GameContext.Provider
      value={{
        currentHex,
        updateCurrentHex,
        updateBoard,
        selectHex,
        makePlayerMove,
        playerAvailableCells
      }}
    >
      {children({ board })}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  boardSize: number.isRequired
};
