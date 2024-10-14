/* eslint-disable import/newline-after-import */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

import { whoIsYoungerFind } from './whoIsYoungerFind.js';
export function whoIsYoungerUI(el) {
  const inputFirst = document.createElement('input');
  inputFirst.type = 'date';
  el.append(inputFirst);

  const inputSecond = document.createElement('input');
  inputSecond.type = 'date';
  el.append(inputSecond);

  const button = document.createElement('button');
  button.innerHTML = 'Кто моложе';
  el.append(button);

  const answer = document.createElement('answer');
  answer.innerHTML = '<div>Введите даты</div>';
  el.append(answer);

  button.addEventListener('click', function () {
    answer.innerHTML = `<div>${whoIsYoungerFind(
      inputFirst.value,
      inputSecond.value,
    )}</div>`;
  });
}
export default whoIsYoungerUI;
