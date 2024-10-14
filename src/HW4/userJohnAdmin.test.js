/* eslint-disable no-undef */
import { userJohnAdmin } from './userJohnAdmin.js';

describe('userJohnAdmin', () => {
  it('should be a function', () => {
    expect(userJohnAdmin).toBeInstanceOf(Function);
  });
});

describe('userJohnAdmin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { n: 5, result: { name: 'John', age: 5, role: 'admin' } },
    { n: 9, result: { name: 'John', age: 9, role: 'admin' } },
    { n: 4, result: { name: 'John', age: 4, role: 'admin' } },
  ].forEach(({ n, result }) => {
    it(`prints '${result}' for ${n}`, () => {
      const logSpy = jest.spyOn(console, 'log');
      userJohnAdmin(n);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
