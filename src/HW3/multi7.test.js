/* eslint-disable no-undef */
import { multi7 } from './multi7.js';

describe('multi7', () => {
  it('should be a function', () => {
    expect(multi7).toBeInstanceOf(Function);
  });
});

describe('multi7', () => {
  const logSpy = jest.spyOn(console, 'log');
  multi7();
  expect(logSpy).toHaveBeenCalledTimes(10);
});
