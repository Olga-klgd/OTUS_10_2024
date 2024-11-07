/* eslint-disable no-undef */
import { userJohn } from './userJohn.js';

describe('userJohn', () => {
  it('should be a function', () => {
    expect(userJohn).toBeInstanceOf(Function);
  });
});

describe('userJohn', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { n: 5, result: { name: 'John', age: 5 } },
    // { n: 9, result: { name: 'John', age: 9 } },
    // { n: 4, result: { name: 'John', age: 4 } }
  ].forEach(({ n, result }) => {
    it(`prints '${result}' for ${n}`, () => {
      const logSpy = jest.spyOn(console, 'log');
      userJohn(n);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
