import playersIndicators from "../constants/playersIndicators";

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

export const findAvailableCells = ({ board, playerColor }) => {
  let availableCells = [];

  board.forEach((_, y) => {
    board.forEach((_, x) => {
      if (board[y][x] === playerColor) {
        availableCells = [
          ...availableCells,
          ...getCellsAround({ x, y, board, cellValue: playersIndicators.none })
        ];
      }
    });
  });

  return availableCells;
};
