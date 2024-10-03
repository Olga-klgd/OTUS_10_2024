import { sum } from './sum.js';

document.querySelector('.app').innerHTML = `<h1>Прогноз погоды</h1><h2>${sum(3, 8)}</h2>`;
