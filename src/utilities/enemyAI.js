import playersIndicators from "../constants/playersIndicators";

const cellsAroundCoord = [
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: -1, y: 1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 }
];

const getEmptyCellsAround = (enemyCell, board) => {
  let cellsAround = [];

  console.log(enemyCell);

  cellsAroundCoord.forEach((cell) => {
    if (
      board[enemyCell[0] + cell.x] &&
      board[enemyCell[0] + cell.x][enemyCell[1] + cell.y] === 0
    ) {
      cellsAround.push([enemyCell[0] + cell.x, enemyCell[1] + cell.y]);
    }
  });

  return cellsAround;
};

export const findAvailableCells = (board) => {
  let availableCells = [];

  board.forEach((_, x) => {
    board.forEach((_, y) => {
      if (board[x][y] === playersIndicators.enemy) {
        availableCells = [
          ...availableCells,
          ...getEmptyCellsAround([x, y], board)
        ];
      }
    });
  });

  return availableCells;
};
