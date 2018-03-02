# codecademy-minesweeper
This program is an activity for the Codecademy intensive course "Build Front-End Web Applications from Scratch" where we were tasked with building a Minesweeper game that could be played in the terminal.

## How to Play
To play Minesweeper, we will create instances of MineSweeperGame in command line.

### For example:
* In the command line, navigate to the lib directory and run `node`
* Run `.load game.js` to load the contents of this file.
* Then create a Game instance and run commands like so:
```javascript
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
```
* When done run `.exit`
