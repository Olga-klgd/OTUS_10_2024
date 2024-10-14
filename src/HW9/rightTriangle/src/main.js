/* eslint-disable import/no-named-as-default */
import rightTriangleUI from './rightTriangleUI.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}

rightTriangleUI(createContainer('rightTriangleUI'));
