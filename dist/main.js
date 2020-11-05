/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: boardDisplay, cells, playerName, form, message, replayBtn, image, drawGame, endGame, updateCell, resetGameInterface, gameLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardDisplay\", function() { return boardDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cells\", function() { return cells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerName\", function() { return playerName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"message\", function() { return message; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replayBtn\", function() { return replayBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"image\", function() { return image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawGame\", function() { return drawGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endGame\", function() { return endGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCell\", function() { return updateCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetGameInterface\", function() { return resetGameInterface; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameLoading\", function() { return gameLoading; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n// /* eslint-disable no-unused-vars */\n// /* eslint-disable no-undef */\n//\n// document.querySelector('.board').style.display = 'none';\n//\n// const statusDisplay = document.querySelector('.game--status');\n//\n// let players = '';\n// let player1 = '';\n// let player2 = '';\n// let gameActive = true;\n// let currentPlayer = 'X';\n// let gameState = ['', '', '', '', '', '', '', '', ''];\n//\n// const winningMessage = () => {\n//   if (currentPlayer === 'X') {\n//     statusDisplay.innerHTML = `Player ${players.player1} has won!`;\n//   } else {\n//     statusDisplay.innerHTML = `Player ${players.player2} has won!`;\n//   }\n// };\n// const drawMessage = () => 'Game ended in a draw!';\n//\n// const currentPlayerName = () => {\n//   players = JSON.parse(localStorage.getItem('players'));\n//   if (currentPlayer === 'X') {\n//     statusDisplay.innerHTML = `It's ${players.player1}'s turn`;\n//   } else {\n//     statusDisplay.innerHTML = `It's ${players.player2}'s turn`;\n//   }\n// };\n//\n// const handleCellPlayed = (clickedCell, clickedCellIndex) => {\n//   gameState[clickedCellIndex] = currentPlayer;\n//   clickedCell.innerHTML = currentPlayer;\n// };\n//\n// const handlePlayerChange = () => {\n//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';\n//   if (currentPlayer === 'X') {\n//     statusDisplay.innerHTML = `It's ${players.player1}'s turn`;\n//   } else {\n//     statusDisplay.innerHTML = `It's ${players.player2}'s turn`;\n//   }\n// };\n//\n// const handleRestartGame = () => {\n//   localStorage.removeItem('players');\n//   window.location.reload();\n// };\n// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', game));\n// document.querySelector('.game--restart').addEventListener('click', handleRestartGame);\n//\n// const empty = () => {\n//   document.querySelector('#player1').value = '';\n//   document.querySelector('#player2').value = '';\n// };\n//\n// const form = document.querySelector('.form');\n// form.addEventListener('submit', (e) => {\n//   e.preventDefault();\n//   player1 = document.querySelector('#player1').value;\n//   player2 = document.querySelector('#player2').value;\n//   players = {\n//     player1,\n//     player2,\n//   };\n//\n//   localStorage.setItem('players', JSON.stringify(players));\n//   document.querySelector('.board').style.display = 'block';\n//   currentPlayerName();\n//\n//   gameActive = true;\n//   currentPlayer = 'X';\n//   gameState = ['', '', '', '', '', '', '', '', ''];\n//   currentPlayerName();\n//   document.querySelectorAll('.cell')\n//     .forEach(cell => { cell.innerHTML = ''; });\n//\n//   empty();\n// });\n\n\n/* eslint-disable import/no-cycle */\n//import img from './giphy.gif';\n\n\nconst boardDisplay = document.querySelector('.board-display');\nconst cells = document.querySelectorAll('.cell');\nconst playerName = document.querySelector('#username');\nconst form = document.querySelector('.form');\nconst message = document.querySelector('.message');\nconst replayBtn = document.querySelector('.replay-btn');\nconst image = document.querySelector('.image');\n//const giphy = document.querySelector('.congrats-img');\n\nconst drawGame = () => {\n  const msg = 'This game is a draw!';\n  message.innerHTML = msg;\n  replayBtn.classList.add('show');\n  image.classList.add('hide');\n};\n\nconst endGame = (player) => {\n  const msg = `${player} has won this game!`;\n  message.innerHTML = msg;\n  cells.forEach((cell) => {\n    cell.removeEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__[\"gameFlow\"]);\n  });\n  form.classList.add('hide');\n  form.classList.remove('show');\n  replayBtn.classList.add('show');\n  //giphy.src = img;\n  image.classList.remove('hide');\n};\n\nconst updateCell = (cells, gameBoard, index) => {\n  // eslint-disable-next-line radix\n  cells[parseInt(index) - 1].innerHTML = `<p>${gameBoard.board[index - 1]}</p>`;\n};\n\nconst resetGameInterface = () => {\n  replayBtn.classList.remove('show');\n\n  cells.forEach((cell) => {\n    cell.innerHTML = '<p></p>';\n  });\n  boardDisplay.classList.add('hide');\n  form.classList.remove('hide');\n  message.innerHTML = '<p>Player one, enter name:</p>';\n\n  image.classList.add('hide');\n};\n\nconst gameLoading = () => {\n  form.classList.add('hide');\n  form.classList.remove('show');\n  boardDisplay.classList.remove('hide');\n  cells.forEach((cell) => {\n    cell.removeEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__[\"gameFlow\"]);\n    cell.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__[\"gameFlow\"], { once: true });\n  });\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: gameFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameFlow\", function() { return gameFlow; });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logic__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-use-before-define */\n\n\n\n\nlet turn = true;\nlet playersArr = [];\n\nconst gameFlow = (e) => {\n  const { index } = e.target.dataset;\n  const marker = turn ? 'X' : 'O';\n  _logic__WEBPACK_IMPORTED_MODULE_2__[\"gameBoard\"].board[index - 1] = marker;\n  Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"updateCell\"])(_dom__WEBPACK_IMPORTED_MODULE_1__[\"cells\"], _logic__WEBPACK_IMPORTED_MODULE_2__[\"gameBoard\"], index);\n  turn = Object(_logic__WEBPACK_IMPORTED_MODULE_2__[\"switchTurns\"])(turn);\n  const win = Object(_logic__WEBPACK_IMPORTED_MODULE_2__[\"checkWin\"])(_logic__WEBPACK_IMPORTED_MODULE_2__[\"winCombos\"], marker, _logic__WEBPACK_IMPORTED_MODULE_2__[\"gameBoard\"]);\n  const player = playersArr.filter(el => el.symbol === marker)[0].name;\n  const nextPlayer = playersArr.filter((el) => el.symbol !== marker)[0].name;\n  const drawCondition = _logic__WEBPACK_IMPORTED_MODULE_2__[\"gameBoard\"].board.every((ele) => ele !== '');\n  if (win) {\n    Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"endGame\"])(player);\n  } else if ((drawCondition) && (win !== true)) {\n    Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"drawGame\"])();\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"message\"].innerHTML = `<p>${nextPlayer}, it's your turn:</p>`;\n  }\n};\n\nconst startGame = (e) => {\n  e.preventDefault();\n  playersArr.push(_dom__WEBPACK_IMPORTED_MODULE_1__[\"playerName\"].value);\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"form\"].reset();\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"message\"].innerHTML = '<p>Player two, enter name:</p>';\n  if (playersArr.length === 2) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"message\"].innerHTML = `<p>${playersArr[0]}, it's your turn:</p>`;\n    Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"gameLoading\"])();\n    const playerOne = Object(_logic__WEBPACK_IMPORTED_MODULE_2__[\"createPlayer\"])(playersArr[0], 'X');\n    playersArr[0] = playerOne;\n    const playerTwo = Object(_logic__WEBPACK_IMPORTED_MODULE_2__[\"createPlayer\"])(playersArr[1], 'O');\n    playersArr[1] = playerTwo;\n  }\n};\n\nconst restartGame = () => {\n  _logic__WEBPACK_IMPORTED_MODULE_2__[\"gameBoard\"].board = ['', '', '', '', '', '', '', '', ''];\n  playersArr = [];\n  turn = true;\n  Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"resetGameInterface\"])();\n};\n\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"form\"].addEventListener('submit', startGame);\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"replayBtn\"].addEventListener('click', restartGame);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-unused-vars */\n/* eslint-disable no-undef */\n// \n// const winningConditions = [\n//   [0, 1, 2],\n//   [3, 4, 5],\n//   [6, 7, 8],\n//   [0, 3, 6],\n//   [1, 4, 7],\n//   [2, 5, 8],\n//   [0, 4, 8],\n//   [2, 4, 6],\n// ];\n//\n// const gameBoard = () => {\n//   let roundWon = false;\n//   for (let i = 0; i <= 7; i += 1) {\n//     const winCondition = winningConditions[i];\n//     const a = gameState[winCondition[0]];\n//     const b = gameState[winCondition[1]];\n//     const c = gameState[winCondition[2]];\n//\n//     if (a === '' || b === '' || c === '') {\n//       roundWon = false;\n//     } else if (a === b && b === c) {\n//       roundWon = true;\n//       break;\n//     }\n//   }\n//   if (roundWon) {\n//     winningMessage();\n//     gameActive = false;\n//     return;\n//   }\n//\n//\n//   const roundDraw = !gameState.includes('');\n//   if (roundDraw) {\n//     statusDisplay.innerHTML = drawMessage();\n//     gameActive = false;\n//     return;\n//   }\n//\n//   handlePlayerChange();\n// };\n//\n// const game = (clickedCellEvent) => {\n//   const clickedCell = clickedCellEvent.target;\n//   const clickedCellIndex = parseInt(\n//     clickedCell.getAttribute('data-cell-index'), 10,\n//   );\n//   if (gameState[clickedCellIndex] !== '' || !gameActive) {\n//     return;\n//   }\n//\n//   handleCellPlayed(clickedCell, clickedCellIndex);\n//   gameBoard();\n// };\n\n/* eslint-disable no-return-assign */\n/* eslint-disable import/prefer-default-export */\n\nconst gameBoard = {\n  board: ['', '', '', '', '', '', '', '', ''],\n};\n\nconst winCombos = [\n  [0, 1, 2],\n  [3, 4, 5],\n  [6, 7, 8],\n  [0, 3, 6],\n  [1, 4, 7],\n  [2, 5, 8],\n  [0, 4, 8],\n  [2, 4, 6],\n];\n\nfunction switchTurns(turn) {\n  return turn = !turn;\n}\n\nfunction createPlayer(name, symbol) {\n  return { name, symbol };\n}\n\nfunction checkWin(winCombos, symbol, gameBoard) {\n  for (let i = 0; i < winCombos.length; i += 1) {\n    const a = gameBoard.board[winCombos[i][0]];\n    const b = gameBoard.board[winCombos[i][1]];\n    const c = gameBoard.board[winCombos[i][2]];\n\n    if (a === symbol && b === symbol && c === symbol) {\n      return true;\n    }\n  }\n  return false;\n}\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|   margin: 0;\\n|   padding: 0;\");\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });