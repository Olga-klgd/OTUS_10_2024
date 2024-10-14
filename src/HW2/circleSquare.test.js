/* eslint-disable no-undef */
import { circleSquare } from './circleSquare.js';

describe('circleSquare', () => {
  it('should be a function', () => {
    expect(circleSquare).toBeInstanceOf(Function);
  });
});

describe('circleSquare', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { circle: 1, square: 2, result: 'Поместится' },
    { circle: 5, square: 10, result: 'Поместится' },
    { circle: 20, square: 6, result: 'Не поместится' },
  ].forEach(({ circle, square, result }) => {
    it(`prints '${result}' for circle = '${circle}' and square = '${square}'`, () => {
      const logSpy = jest.spyOn(console, 'log');
      circleSquare(circle, square);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
