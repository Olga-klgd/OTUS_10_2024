export function makeList(el) {
  const header = document.createElement('h2');
  header.innerHTML = 'Интерактивный список';
  el.append(header);

  const input = document.createElement('input');
  el.append(input);

  const button = document.createElement('button');
  button.innerHTML = 'Добавить';
  el.append(button);
  button.hidden = true;

  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');

  el.append(paragraph1);
  el.append(paragraph2);
  el.append(paragraph3);

  paragraph1.innerHTML = '1';
  paragraph2.innerHTML = '2';
  paragraph3.innerHTML = '3';

  input.addEventListener('input', () => {
    if (input.value !== '') {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  });

  button.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    el.append(newParagraph);
    newParagraph.innerHTML = input.value;
    input.value = '';
    button.hidden = true;
  });

  button.addEventListener('click', () => {
    const countElement = el.querySelectorAll('p');
    if (countElement.length > 5) {
      countElement[0].remove();
    }
  });
}
export default makeList;
