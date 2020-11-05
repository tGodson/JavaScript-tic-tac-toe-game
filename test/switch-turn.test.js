import { switchTurns } from '../src/logic';

test('player turn switches to false if currently true', () => {
  const turn = true;
  expect(switchTurns(turn)).toBe(false);
});

test('player turn switches to true if currently false', () => {
  const turn = false;
  expect(switchTurns(turn)).toBe(true);
});

test('player turn switches to true if currently false', () => {
  const turn = false;
  expect(switchTurns(turn)).not.toBe(false);
});
