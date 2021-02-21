export default (size) => {
  let board = [];

  for (let i = 0; i < size; i++) {
    board.push(new Array(size + i).fill(0));
  }

  return [...board, ...board.slice(0, board.length - 1).reverse()];
};
