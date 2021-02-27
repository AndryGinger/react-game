export default (size) => {
  let board = [];

  for (let i = 0; i < size; i++) {
    board.push(new Array(size + i).fill(0));
  }

  board = [
    ...board,
    ...board.slice(0, board.length - 1).reverse()
  ].map((hexRow) => [...hexRow]);

  board[board.length - 1][0] = 1;
  board[0][size - 1] = 2;

  return board;
};
