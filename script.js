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

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const gameBoard = () => {
  let roundWon = false;
  for (let i = 0; i <= 7; i += 1) {
    const winCondition = winningConditions[i];
    const a = gameState[winCondition[0]];
    const b = gameState[winCondition[1]];
    const c = gameState[winCondition[2]];

    if (a === '' || b === '' || c === '') {
      roundWon = false;
    } else if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    winningMessage();
    gameActive = false;
    return;
  }


  const roundDraw = !gameState.includes('');
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
};

const game = (clickedCellEvent) => {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index'), 10,
  );
  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  gameBoard();
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
