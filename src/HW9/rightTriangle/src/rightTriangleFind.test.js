/* eslint-disable no-undef */
import { rightTriangleFind } from './rightTriangleFind';

describe('circleRadiusFind', () => {
  it('should be a function', () => {
    expect(rightTriangleFind).toBeInstanceOf(Function);
  });
});
describe('rightTriangleFind', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      a: 3,
      b: 4,
      c: 5,
      answerResult: 'квадратный',
    },
    {
      a: 1,
      b: 2,
      c: 2,
      answerResult: 'не квадратный',
    },
    {
      a: 10,
      b: 20,
      c: 2,
      answerResult: 'не квадратный',
    },
  ].forEach(({
    a, b, c, answerResult,
  }) => {
    it(`Для сторон ${a}, ${b}, ${c} - ${answerResult}'`, () => {
      const answer = rightTriangleFind(a, b, c);
      expect(answer).toBe(answerResult);
    });
  });
});
