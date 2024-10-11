/* eslint-disable no-undef */
import { middleOdd } from './middleOdd.js';

describe('middleOdd', () => {
  it('should be a function', () => {
    expect(middleOdd).toBeInstanceOf(Function);
  });
});

describe('middleOdd', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { n: 6, result: 3 },
    { n: 9, result: 5 },
    { n: 4, result: 2 },
  ].forEach(({ n, result }) => {
    it(`prints '${result}' for ${n}`, () => {
      const logSpy = jest.spyOn(console, 'log');
      middleOdd(n);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
