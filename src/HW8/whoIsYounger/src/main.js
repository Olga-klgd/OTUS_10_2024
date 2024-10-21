/* eslint-disable import/no-named-as-default */
import whoIsYoungerUI from './whoIsYoungerUI.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}

whoIsYoungerUI(createContainer('whoIsYoungerUI'));
