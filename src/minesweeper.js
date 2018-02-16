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
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1,-1],
    [-1.0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1]
  ];
  const numberofRows = bombBoard.length;
  const numberofColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= 0 &&
      neighborRowIndex < numberofRows &&
      neighborColumnIndex >= 0 &&
      neighborColumnIndex < numberofColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs
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
