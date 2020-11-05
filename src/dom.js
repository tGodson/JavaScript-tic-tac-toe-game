/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

document.querySelector('.board').style.display = 'none';

const statusDisplay = document.querySelector('.game--status');

let players = '';
let player1 = '';
let player2 = '';
let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMessage = () => {
  if (currentPlayer === 'X') {
    statusDisplay.innerHTML = `Player ${players.player1} has won!`;
  } else {
    statusDisplay.innerHTML = `Player ${players.player2} has won!`;
  }
};
const drawMessage = () => 'Game ended in a draw!';

const currentPlayerName = () => {
  players = JSON.parse(localStorage.getItem('players'));
  if (currentPlayer === 'X') {
    statusDisplay.innerHTML = `It's ${players.player1}'s turn`;
  } else {
    statusDisplay.innerHTML = `It's ${players.player2}'s turn`;
  }
};

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
};

const handlePlayerChange = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  if (currentPlayer === 'X') {
    statusDisplay.innerHTML = `It's ${players.player1}'s turn`;
  } else {
    statusDisplay.innerHTML = `It's ${players.player2}'s turn`;
  }
};

const handleRestartGame = () => {
  localStorage.removeItem('players');
  window.location.reload();
};
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', game));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

const empty = () => {
  document.querySelector('#player1').value = '';
  document.querySelector('#player2').value = '';
};

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  player1 = document.querySelector('#player1').value;
  player2 = document.querySelector('#player2').value;
  players = {
    player1,
    player2,
  };

  localStorage.setItem('players', JSON.stringify(players));
  document.querySelector('.board').style.display = 'block';
  currentPlayerName();

  gameActive = true;
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  currentPlayerName();
  document.querySelectorAll('.cell')
    .forEach(cell => { cell.innerHTML = ''; });

  empty();
});
