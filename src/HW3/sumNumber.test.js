/* eslint-disable no-undef */
import { sumNumber } from './sumNumber.js';

describe('sumNumber', () => {
  it('should be a function', () => {
    expect(sumNumber).toBeInstanceOf(Function);
  });
});
describe('sumNumber', () => {
  const logSpy = jest.spyOn(console, 'log');
  sumNumber();
  expect(logSpy).toHaveBeenCalledWith(3825);
});
