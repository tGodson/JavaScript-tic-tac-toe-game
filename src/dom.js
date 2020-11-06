// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
//
// document.querySelector('.board').style.display = 'none';
//
// const statusDisplay = document.querySelector('.game--status');
//
// let players = '';
// let player1 = '';
// let player2 = '';
// let gameActive = true;
// let currentPlayer = 'X';
// let gameState = ['', '', '', '', '', '', '', '', ''];
//
// const winningMessage = () => {
//   if (currentPlayer === 'X') {
//     statusDisplay.innerHTML = `Player ${players.player1} has won!`;
//   } else {
//     statusDisplay.innerHTML = `Player ${players.player2} has won!`;
//   }
// };
// const drawMessage = () => 'Game ended in a draw!';
//
// const currentPlayerName = () => {
//   players = JSON.parse(localStorage.getItem('players'));
//   if (currentPlayer === 'X') {
//     statusDisplay.innerHTML = `It's ${players.player1}'s turn`;
//   } else {
//     statusDisplay.innerHTML = `It's ${players.player2}'s turn`;
//   }
// };
//
// const handleCellPlayed = (clickedCell, clickedCellIndex) => {
//   gameState[clickedCellIndex] = currentPlayer;
//   clickedCell.innerHTML = currentPlayer;
// };
//
// const handlePlayerChange = () => {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   if (currentPlayer === 'X') {
//     statusDisplay.innerHTML = `It's ${players.player1}'s turn`;
//   } else {
//     statusDisplay.innerHTML = `It's ${players.player2}'s turn`;
//   }
// };
//
// const handleRestartGame = () => {
//   localStorage.removeItem('players');
//   window.location.reload();
// };
// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', game));
// document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
//
// const empty = () => {
//   document.querySelector('#player1').value = '';
//   document.querySelector('#player2').value = '';
// };
//
// const form = document.querySelector('.form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   player1 = document.querySelector('#player1').value;
//   player2 = document.querySelector('#player2').value;
//   players = {
//     player1,
//     player2,
//   };
//
//   localStorage.setItem('players', JSON.stringify(players));
//   document.querySelector('.board').style.display = 'block';
//   currentPlayerName();
//
//   gameActive = true;
//   currentPlayer = 'X';
//   gameState = ['', '', '', '', '', '', '', '', ''];
//   currentPlayerName();
//   document.querySelectorAll('.cell')
//     .forEach(cell => { cell.innerHTML = ''; });
//
//   empty();
// });


/* eslint-disable import/no-cycle */
// import img from './giphy.gif';
import { gameFlow } from './index';

const boardDisplay = document.querySelector('.board-display');
const cells = document.querySelectorAll('.cell');
const playerName = document.querySelector('#username');
const form = document.querySelector('.form');
const message = document.querySelector('.message');
const replayBtn = document.querySelector('.replay-btn');
const image = document.querySelector('.image');
// const giphy = document.querySelector('.congrats-img');

const drawGame = () => {
  const msg = 'This game is a draw!';
  message.innerHTML = msg;
  replayBtn.classList.add('show');
  image.classList.add('hide');
};

const endGame = (player) => {
  const msg = `${player} has won this game!`;
  message.innerHTML = msg;
  cells.forEach((cell) => {
    cell.removeEventListener('click', gameFlow);
  });
  form.classList.add('hide');
  form.classList.remove('show');
  replayBtn.classList.add('show');
  // giphy.src = img;
  image.classList.remove('hide');
};

const updateCell = (cells, gameBoard, index) => {
  // eslint-disable-next-line radix
  cells[parseInt(index) - 1].innerHTML = `<p>${gameBoard.board[index - 1]}</p>`;
};

const resetGameInterface = () => {
  replayBtn.classList.remove('show');

  cells.forEach((cell) => {
    cell.innerHTML = '<p></p>';
  });
  boardDisplay.classList.add('hide');
  form.classList.remove('hide');
  message.innerHTML = '<p>Player one, enter name:</p>';

  image.classList.add('hide');
};

const gameLoading = () => {
  form.classList.add('hide');
  form.classList.remove('show');
  boardDisplay.classList.remove('hide');
  cells.forEach((cell) => {
    cell.removeEventListener('click', gameFlow);
    cell.addEventListener('click', gameFlow, { once: true });
  });
};


export {
  boardDisplay, cells, playerName, form, message, replayBtn,
  image, drawGame, endGame, updateCell, resetGameInterface,
  gameLoading,
};
