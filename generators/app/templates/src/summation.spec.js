import summation from './summation';

test('1 + 2', () => {
  expect(summation(1, 2)).toBe(3);
});

test('1 + 2 + 3', () => {
  expect(summation(1, 2, 3)).toBe(6);
});
