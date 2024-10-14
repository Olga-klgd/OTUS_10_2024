// eslint-disable-next-line import/no-named-as-default
import makeList from './makeList.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}

makeList(createContainer('makeList'));
