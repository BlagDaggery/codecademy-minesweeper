import { Board } from './board';

class Game {
  constructor(numberofRows,numberofColumns,numberOfBombs) {
    this._board = new Board(numberofRows,numberofColumns,numberOfBombs);
  }

  playMove(rowIndex,columnIndex) {
    this._board.flipTile(rowIndex,columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('You hit a bomb! Game Over!');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('Congratulations! You won!');
    } else {
      console.log('Current Board');
      this._board.print();
    }
  }
}
