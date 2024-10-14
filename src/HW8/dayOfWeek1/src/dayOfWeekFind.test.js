/* eslint-disable no-undef */
/* eslint-disable import/newline-after-import */
import { dayOfWeekFind } from './dayOfWeekFind';
describe('dayOfWeekUI', () => {
  it('should be a function', () => {
    expect(dayOfWeekFind).toBeInstanceOf(Function);
  });
  const answerResult = dayOfWeekFind('2024-07-11');
  it('Проверяем день недели', () => {
    expect(answerResult).toBe('четверг');
  });
});
