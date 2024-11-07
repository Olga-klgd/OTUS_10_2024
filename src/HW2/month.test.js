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
    { numberMonth: 1, result: 'январь' },
    { numberMonth: 2, result: 'февраль' },
    { numberMonth: 3, result: 'март' },
    { numberMonth: 4, result: 'апрель' },
    { numberMonth: 5, result: 'май' },
    { numberMonth: 6, result: 'июнь' },
    { numberMonth: 7, result: 'июль' },
    { numberMonth: 8, result: 'август' },
    { numberMonth: 9, result: 'сентябрь' },
    { numberMonth: 10, result: 'октябрь' },
    { numberMonth: 11, result: 'ноябрь' },
    { numberMonth: 12, result: 'декабрь' },
    { numberMonth: 111, result: 'Нет такого месяца' },
  ].forEach(({ numberMonth, result }) => {
    it(`prints '${result}' for '${numberMonth}' `, () => {
      const logSpy = jest.spyOn(console, 'log');
      month(numberMonth);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
