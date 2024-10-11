/* eslint-disable no-undef */
import { month } from './month.js';

describe('month', () => {
  it('should be a function', () => {
    expect(month).toBeInstanceOf(Function);
  });
});

describe('month', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { numberMonth: 3, result: 'март' },
    { numberMonth: 2, result: 'февраль' },
    { numberMonth: 111, result: 'Нет такого месяца' },
  ].forEach(({ numberMonth, result }) => {
    it(`prints '${result}' for '${numberMonth}' `, () => {
      const logSpy = jest.spyOn(console, 'log');
      month(numberMonth);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
