/* eslint-disable func-names */
/* eslint-disable import/newline-after-import */
import { dayOfWeekFind } from './dayOfWeekFind.js';
export function dayOfWeekUI(el) {
  const input = document.createElement('input');
  input.type = 'date';
  el.append(input);

  const button = document.createElement('button');
  button.innerHTML = 'Найти день недели';
  el.append(button);

  const answer = document.createElement('answer');
  answer.innerHTML = '<div>Введите дату</div>';
  el.append(answer);

  button.addEventListener('click', () => {
    answer.innerHTML = `<div>${dayOfWeekFind(input.value)}</div>`;
  });
}
export default dayOfWeekUI;
