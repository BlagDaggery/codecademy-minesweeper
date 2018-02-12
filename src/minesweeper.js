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

const generateBombBoard = (rowCount, columnCount, bombCount) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < bombCount) {
    let randomRowIndex = Math.floor(Math.random() * rowCount);
    let randomColumnIndex = Math.floor(Math.random() * columnCount);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    // The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
  }
  return board;
}

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
