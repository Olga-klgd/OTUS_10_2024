/* eslint-disable no-undef */
/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
import { diff } from './diff.js';
describe('diff', () => {
  it('should be a function', () => {
    expect(diff).toBeInstanceOf(Function);
  });
});

describe('diff', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, b: 2, result: 1 },
    { a: 30, b: 2, result: 28 },
    { a: 1, b: 5, result: 4 },
  ].forEach(({ a, b, result }) => {
    it(`prints '${result}' for ${a} and ${b}`, () => {
      const logSpy = jest.spyOn(console, 'log');
      diff(a, b);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
