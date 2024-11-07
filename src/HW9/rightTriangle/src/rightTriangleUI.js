// Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным

import { rightTriangleFind } from './rightTriangleFind.js';

export function rightTriangleUI(el) {
  const header = document.createElement('div');
  header.innerHTML = 'Введите данные';
  el.append(header);

  const inputA = document.createElement('input');
  inputA.type = 'number';
  el.append(inputA);

  const inputB = document.createElement('input');
  inputB.type = 'number';
  el.append(inputB);

  const inputC = document.createElement('input');
  inputC.type = 'number';
  el.append(inputC);

  const button = document.createElement('button');
  button.innerHTML = 'Проверяем';
  el.append(button);

  const answer = document.createElement('answer');
  answer.innerHTML = '<div>Результат</div>';
  el.append(answer);

  button.addEventListener('click', () => {
    answer.innerHTML = `<div>${rightTriangleFind(
      inputA.value,
      inputB.value,
      inputC.value,
    )}</div>`;
  });
}
export default rightTriangleUI;
