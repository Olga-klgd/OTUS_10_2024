/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { makeList } from './makeList.js';

describe('makeList', () => {
  it('should be a function', () => {
    expect(makeList).toBeInstanceOf(Function);
  });
});

describe('makeList', () => {
  let el;
  let button;
  let input;
  beforeEach(() => {
    el = document.createElement('div');
    makeList(el);
    button = el.querySelector('button');
    input = el.querySelector('input');
  });

  it('начальные установки', () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe('Добавить');
    expect(button.hidden).toBe(true);
    expect(el.querySelectorAll('p').length).toBe(3);
  });

  it('показывает или прячет кнопку в зависимости от контента', () => {
    input.value !== '';
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe('Добавить');
    expect(button.hidden).toBe(false);
    expect(el.querySelectorAll('p').length).toBe(3);
  });

  it('количество параграфов не больше 5', () => {
    const paragraph = document.querySelectorAll('p');
    expect(paragraph.length).toBeLessThan(6);
  });
});
