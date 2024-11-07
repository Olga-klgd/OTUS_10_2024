/* eslint-disable no-undef */
/* eslint-disable import/newline-after-import */
import { rightTriangleUI } from './rightTriangleUI';
describe('rightTriangleUI', () => {
  it('should be a function', () => {
    expect(rightTriangleUI).toBeInstanceOf(Function);
  });
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    rightTriangleUI(el);
  });
  it('Проверяем интерфейс', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelectorAll('input').length).toBe(3);
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('button').innerHTML).toBe('Проверяем');
    expect(el.querySelector('answer')).toBeTruthy();
  });
});
