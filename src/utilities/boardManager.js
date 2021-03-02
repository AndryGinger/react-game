import playersIndicators from "../constants/playersIndicators";
import _ from "lodash";

const cellsAroundCoord = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { y: 1 },
  { y: 1, x: 0 },
  { y: -1 },
  { y: -1, x: 0 }
];

export const getCellsAround = ({
  x,
  y,
  board,
  cellValue = 0,
  withJump = false
}) => {
  let cellsAround = [];
  let xModificator;
  let neighborX;

  cellsAroundCoord.forEach((cell) => {
    if (board[y + cell.y]) {
      xModificator = board[y + cell.y]?.length - board[y]?.length;
      neighborX = x + (cell.x === 0 || cell.x ? cell.x : xModificator);

      if (board[y + cell.y][neighborX] >= 0) {
        cellsAround.push([y + cell.y, neighborX]);

        if (withJump) {
          cellsAround = [
            ...cellsAround,
            ...getCellsAround({ x: neighborX, y: y + cell.y, board })
          ];
        }
      }
    }
  });

  cellsAround = cellsAround.filter(
    (cell) => board[cell[0]][cell[1]] === cellValue
  );

  return cellsAround;
};

export const detectEnemyMove = ({ board }) => {
  let originsWithCells = {},
    availableCells,
    originX,
    originY,
    originsWithAttack = {};

  board.forEach((row, y) => {
    row.forEach((el, x) => {
      if (board[y][x] === playersIndicators.enemy) {
        const cellsAround = getCellsAround({
          x,
          y,
          board,
          cellValue: playersIndicators.none,
          withJump: true
        });

        if (cellsAround.length) {
          originsWithCells[[y, x]] = _.uniqBy(cellsAround, (cell) =>
            JSON.stringify(cell)
          );
        }
      }
    });
  });

  Object.keys(originsWithCells).forEach((key) => {
    originsWithCells[key].forEach((cell) => {
      const playerCellsAround = getCellsAround({
        x: cell[1],
        y: cell[0],
        board,
        cellValue: playersIndicators.player,
        withJump: true
      });

      if (playerCellsAround.length) {
        originsWithAttack[key] = [cell];
      }
    });
  });

  const sourceHash = Object.keys(originsWithAttack).length
    ? originsWithAttack
    : originsWithCells;
  const originsCells = Object.keys(sourceHash);

  [originY, originX] = _.shuffle(originsCells)[0].split(",");

  const origin = [parseInt(originY), parseInt(originX)];
  availableCells = sourceHash[origin];

  if (availableCells.length > 0) {
    let steps = [];
    let jumps = [];

    availableCells.forEach((cell) => {
      let enemyCells = getCellsAround({
        x: cell[1],
        y: cell[0],
        board,
        cellValue: playersIndicators.enemy
      });

      enemyCells.some(
        (enemyCell) => origin[0] === enemyCell[0] && origin[1] === enemyCell[1]
      )
        ? steps.push(cell)
        : jumps.push(cell);
    });

    availableCells = steps.length ? steps : jumps;
  }

  return { origin, availableCells };
};
