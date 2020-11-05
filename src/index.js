/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import './style.css';
import {
  cells,
  playerName,
  form,
  message,
  replayBtn,
  drawGame,
  endGame,
  updateCell,
  resetGameInterface,
  gameLoading,
} from './dom';
import {
  switchTurns, createPlayer, checkWin, winCombos, gameBoard,
} from './logic';

let turn = true;
let playersArr = [];

const gameFlow = (e) => {
  const { index } = e.target.dataset;
  const marker = turn ? 'X' : 'O';
  gameBoard.board[index - 1] = marker;
  updateCell(cells, gameBoard, index);
  turn = switchTurns(turn);
  const win = checkWin(winCombos, marker, gameBoard);
  const player = playersArr.filter(el => el.symbol === marker)[0].name;
  const nextPlayer = playersArr.filter((el) => el.symbol !== marker)[0].name;
  const drawCondition = gameBoard.board.every((ele) => ele !== '');
  if (win) {
    endGame(player);
  } else if ((drawCondition) && (win !== true)) {
    drawGame();
  } else {
    message.innerHTML = `<p>${nextPlayer}, it's your turn:</p>`;
  }
};

const startGame = (e) => {
  e.preventDefault();
  playersArr.push(playerName.value);
  form.reset();
  message.innerHTML = '<p>Player two, enter name:</p>';
  if (playersArr.length === 2) {
    message.innerHTML = `<p>${playersArr[0]}, it's your turn:</p>`;
    gameLoading();
    const playerOne = createPlayer(playersArr[0], 'X');
    playersArr[0] = playerOne;
    const playerTwo = createPlayer(playersArr[1], 'O');
    playersArr[1] = playerTwo;
  }
};

const restartGame = () => {
  gameBoard.board = ['', '', '', '', '', '', '', '', ''];
  playersArr = [];
  turn = true;
  resetGameInterface();
};

form.addEventListener('submit', startGame);
replayBtn.addEventListener('click', restartGame);

export { gameFlow };
