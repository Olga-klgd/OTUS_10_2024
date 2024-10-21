/* eslint-disable import/no-named-as-default */
import dayOfWeekUI from './dayOfWeekUI.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}

dayOfWeekUI(createContainer('dayOfWeekUI'));
