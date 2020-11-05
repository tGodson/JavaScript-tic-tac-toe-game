import { checkWin, winCombos } from '../src/logic';

test('returns false when there is no winning move', () => {
  const marker = 'O';
  const gameBoard = {
    board: ['', '', '', '', '', '', '', '', ''],
  };
  expect(checkWin(winCombos, marker, gameBoard)).toEqual(false);
});

test('return true if there is a horizontal winning move', () => {
  const marker = 'O';
  const gameBoard = {
    board: ['O', 'O', 'O', '', '', '', '', '', ''],
  };
  expect(checkWin(winCombos, marker, gameBoard)).toEqual(true);
});

test('returns true when there is a diagonal winning move', () => {
  const marker = 'X';
  const gameBoard = {
    board: ['X', '', '', '', 'X', '', '', '', 'X'],
  };
  expect(checkWin(winCombos, marker, gameBoard)).toEqual(true);
});

test('return true if there is a vertical winning move', () => {
  const marker = 'O';
  const gameBoard = {
    board: ['', '', 'O', '', '', 'O', '', '', 'O'],
  };
  expect(checkWin(winCombos, marker, gameBoard)).toEqual(true);
});
