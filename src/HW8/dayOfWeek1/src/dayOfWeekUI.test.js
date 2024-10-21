/* eslint-disable no-undef */
import { dayOfWeekUI } from './dayOfWeekUI';

describe('dayOfWeekUI', () => {
  it('should be a function', () => {
    expect(dayOfWeekUI).toBeInstanceOf(Function);
  });
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    dayOfWeekUI(el);
  });
  it('Проверяем интерфейс', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('button').innerHTML).toBe('Найти день недели');
    expect(el.querySelector('answer')).toBeTruthy();
  });
});
