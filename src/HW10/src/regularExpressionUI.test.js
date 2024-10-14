/* eslint-disable no-undef */
import { regularExpressionUI } from './regularExpressionUI';

describe('circleRadiusUI', () => {
  it('should be a function', () => {
    expect(regularExpressionUI).toBeInstanceOf(Function);
  });
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    regularExpressionUI(el);
  });
  it('Проверяем интерфейс', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('button').innerHTML).toBe('Проверяем');
    expect(el.querySelector('answer')).toBeTruthy();
  });
});
