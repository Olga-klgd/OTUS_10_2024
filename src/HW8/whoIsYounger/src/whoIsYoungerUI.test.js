/* eslint-disable no-undef */
import { whoIsYoungerUI } from './whoIsYoungerUI';

describe('whoIsYoungerUI', () => {
  it('should be a function', () => {
    expect(whoIsYoungerUI).toBeInstanceOf(Function);
  });
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    whoIsYoungerUI(el);
  });
  it('Проверяем интерфейс', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelectorAll('input').length).toBe(2);
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('button').innerHTML).toBe('Кто моложе');
    expect(el.querySelector('answer')).toBeTruthy();
  });
});
