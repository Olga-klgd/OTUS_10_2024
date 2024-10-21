/* eslint-disable import/no-named-as-default */
import quadraticEquationUI from './quadraticEquationUI.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}
quadraticEquationUI(createContainer('quadraticEquationUI'));
