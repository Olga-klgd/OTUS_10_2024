/* eslint-disable no-undef */
import { quadraticEquationUI } from './quadraticEquationUI';

describe('quadraticEquationUI', () => {
  it('should be a function', () => {
    expect(quadraticEquationUI).toBeInstanceOf(Function);
  });
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    quadraticEquationUI(el);
  });
  it('Проверяем интерфейс', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelectorAll('input').length).toEqual(3);
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('button').innerHTML).toBe('Считаем');
    expect(el.querySelector('answer')).toBeTruthy();
  });
});
