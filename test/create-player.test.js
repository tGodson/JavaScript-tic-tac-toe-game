import { createPlayer } from '../src/logic';

test('creates a player object with given name and symbol', () => {
  expect(createPlayer('admin', 'X')).toEqual({ name: 'admin', symbol: 'X' });
});

test('should not return an empty object if name and symbol is passed', () => {
  expect(createPlayer('admin', 'X')).not.toEqual({});
});
