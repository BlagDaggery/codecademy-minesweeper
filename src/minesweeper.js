const generatePlayerBoard = (rowCount, columnCount) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}
