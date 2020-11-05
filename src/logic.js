/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// 
// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
//
// const gameBoard = () => {
//   let roundWon = false;
//   for (let i = 0; i <= 7; i += 1) {
//     const winCondition = winningConditions[i];
//     const a = gameState[winCondition[0]];
//     const b = gameState[winCondition[1]];
//     const c = gameState[winCondition[2]];
//
//     if (a === '' || b === '' || c === '') {
//       roundWon = false;
//     } else if (a === b && b === c) {
//       roundWon = true;
//       break;
//     }
//   }
//   if (roundWon) {
//     winningMessage();
//     gameActive = false;
//     return;
//   }
//
//
//   const roundDraw = !gameState.includes('');
//   if (roundDraw) {
//     statusDisplay.innerHTML = drawMessage();
//     gameActive = false;
//     return;
//   }
//
//   handlePlayerChange();
// };
//
// const game = (clickedCellEvent) => {
//   const clickedCell = clickedCellEvent.target;
//   const clickedCellIndex = parseInt(
//     clickedCell.getAttribute('data-cell-index'), 10,
//   );
//   if (gameState[clickedCellIndex] !== '' || !gameActive) {
//     return;
//   }
//
//   handleCellPlayed(clickedCell, clickedCellIndex);
//   gameBoard();
// };

/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function switchTurns(turn) {
  return turn = !turn;
}

function createPlayer(name, symbol) {
  return { name, symbol };
}

function checkWin(winCombos, symbol, gameBoard) {
  for (let i = 0; i < winCombos.length; i += 1) {
    const a = gameBoard.board[winCombos[i][0]];
    const b = gameBoard.board[winCombos[i][1]];
    const c = gameBoard.board[winCombos[i][2]];

    if (a === symbol && b === symbol && c === symbol) {
      return true;
    }
  }
  return false;
}
