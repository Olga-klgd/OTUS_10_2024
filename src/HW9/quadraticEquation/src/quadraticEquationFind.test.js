/* eslint-disable no-undef */
import { quadraticEquationFind } from './quadraticEquationFind';

describe('quadraticEquationFind', () => {
  it('should be a function', () => {
    expect(quadraticEquationFind).toBeInstanceOf(Function);
  });
});
describe('quadraticEquationFind', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      a: 1,
      b: -3,
      c: 2,
      answerResult: 'Есть два корня: 2 и 1',
    },
    {
      a: 1,
      b: -6,
      c: 9,
      answerResult: 'Есть один корень: 3',
    },
    {
      a: 1,
      b: 2,
      c: 3,
      answerResult: 'Корней нет',
    },
  ].forEach(({
    a, b, c, answerResult,
  }) => {
    it(`Для коэффициентов '${a}' '${b}' '${c}' '${answerResult}'`, () => {
      const answer = quadraticEquationFind(a, b, c);
      expect(answer).toBe(answerResult);
    });
  });
});
