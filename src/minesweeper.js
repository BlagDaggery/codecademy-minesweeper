class Board {
  constructor(numberofRows,numberofColumns,numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberofRows * numberofColumns;
    this._playerBoard = Board.generatePlayerBoard(numberofRows,numberofColumns);
    this._bombBoard = Board.generateBombBoard(numberofRows,numberofColumns,numberOfBombs);
  }
  get playerBoard() {return this._playerBoard;}

  flipTile(rowIndex,columnIndex) {
    if (this.playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B' ) {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex,columnIndex);
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex,columnIndex) {
    const neighborOffsets = [
      [-1,-1],
      [-1,0],
      [-1,1],
      [0,-1],
      [0,1],
      [1,-1],
      [1,0],
      [1,1]
    ];
    const numberofRows = this._bombBoard.length;
    const numberofColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];

      if (neighborRowIndex >= 0 && neighborRowIndex < numberofRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberofColumns) {
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
     return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    console.log(this_playerBoard.map(row => row.join(' | ')).join('\n'));
  }
}


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






let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3,3,4);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard,bombBoard,1,2);
console.log('Updated Player Board');
printBoard(playerBoard);
