import React, { useState, useContext } from "react";
import boardBuilder from "../utilities/boardBuilder";
import { findAvailableCells, getCellsAround } from "../utilities/boardManager";
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
    if (board[hexPos[0]][hexPos[1]] !== 1) return;

    updateCurrentHex(hexPos);
    updatePlayerAvailableCells(
      getCellsAround({
        x: hexPos[1],
        y: hexPos[0],
        board,
        cellValue: playersIndicators.none,
        withJump: true
      })
    );
  };

  const makeMove = ({ hexPos, playerColor }) => {
    const newBoard = [...board];
    const enemyCellsAround = getCellsAround({
      x: hexPos[1],
      y: hexPos[0],
      board,
      cellValue:
        playerColor === playersIndicators.enemy
          ? playersIndicators.player
          : playersIndicators.enemy
    });

    if (
      currentHex &&
      playerColor === playersIndicators.player &&
      (currentHex[0] - 2 === hexPos[0] ||
        currentHex[0] + 2 === hexPos[0] ||
        currentHex[1] - 2 === hexPos[1] ||
        currentHex[1] + 2 === hexPos[1])
    ) {
      newBoard[currentHex[0]][currentHex[1]] = playersIndicators.none;
    }

    newBoard[hexPos[0]][hexPos[1]] = playerColor;
    enemyCellsAround.forEach(
      (cell) => (newBoard[cell[0]][cell[1]] = playerColor)
    );

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
    if (board[hexPos[0]][hexPos[1]] !== 0) return;

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
