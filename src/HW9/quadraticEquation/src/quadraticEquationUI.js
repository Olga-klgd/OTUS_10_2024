/* eslint-disable quotes */
// Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.
import { quadraticEquationFind } from './quadraticEquationFind.js';

export function quadraticEquationUI(el) {
  const header = document.createElement('div');
  header.innerHTML = 'Введите коэффициенты';
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
  button.innerHTML = 'Считаем';
  el.append(button);

  const answer = document.createElement('answer');
  answer.innerHTML = `<div>Задайте число</div>`;
  el.append(answer);

  button.addEventListener('click', () => {
    answer.innerHTML = `<div>${quadraticEquationFind(
      inputA.value,
      inputB.value,
      inputC.value,
    )}</div>`;
  });
}
export default quadraticEquationUI;
