import React, { useState, useContext } from "react";
import boardBuilder from "../utilities/boardBuilder";
import { detectEnemyMove, getCellsAround } from "../utilities/boardManager";
import playersIndicators from "../constants/playersIndicators";
import _ from "lodash";
import { number } from "prop-types";

const GameContext = React.createContext();

export const useGame = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children, boardSize }) => {
  const [isEnemyTurn, updateIsEnemyTurn] = useState(false);
  const [isGameOver, updateIsGameOver] = useState(false);
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

  const checkIfGameIsFinished = (gameBoard, playerColor) => {
    const anySteps = gameBoard.some((row, y) => {
      return gameBoard.some((column, x) => {
        const cell = getCellsAround({
          x,
          y,
          board: gameBoard,
          cellValue: playerColor
        });

        return cell.length > 0;
      });
    });

    if (!anySteps) {
      updateIsGameOver(true);
      return true;
    }

    return false;
  };

  const makeMove = ({ hexPos, playerColor, origin }) => {
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

    const cellsAround = getCellsAround({
      x: origin[1],
      y: origin[0],
      board,
      cellValue: playersIndicators.none
    });
    const isCloseStep = cellsAround.some(
      (cell) => cell[0] === hexPos[0] && cell[1] === hexPos[1]
    );

    if (!isCloseStep) {
      newBoard[origin[0]][origin[1]] = playersIndicators.none;
    }

    newBoard[hexPos[0]][hexPos[1]] = playerColor;
    enemyCellsAround.forEach(
      (cell) => (newBoard[cell[0]][cell[1]] = playerColor)
    );

    updateBoard(newBoard);
    return checkIfGameIsFinished(
      newBoard,
      playerColor === playersIndicators.enemy
        ? playersIndicators.player
        : playersIndicators.enemy
    );
  };

  const enemyTurn = () => {
    setTimeout(() => {
      const { origin, availableCells } = detectEnemyMove({ board });
      const newEnemyCell = _.sample(availableCells);

      makeMove({
        hexPos: newEnemyCell,
        playerColor: playersIndicators.enemy,
        origin
      });
      updateIsEnemyTurn(false);
    }, 1000);
  };

  const makePlayerMove = ({ hexPos, playerColor }) => {
    if (board[hexPos[0]][hexPos[1]] !== 0) return;

    const stopGame = makeMove({ hexPos, playerColor, origin: currentHex });

    updateIsEnemyTurn(true);
    updateCurrentHex(null);
    updatePlayerAvailableCells([]);

    if (!stopGame) {
      enemyTurn();
    }
  };

  return (
    <GameContext.Provider
      value={{
        currentHex,
        updateCurrentHex,
        updateBoard,
        selectHex,
        makePlayerMove,
        playerAvailableCells,
        isGameOver,
        isEnemyTurn
      }}
    >
      {children({ board })}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  boardSize: number.isRequired
};
