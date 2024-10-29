// создать объект user с полем name и добавить поле age
export function userJohn() {
  const user = {
    name: 'John',
  };
  // eslint-disable-next-line no-alert
  let age = +prompt('Введите возраст', '');
  age = 5;
  user.age = age;
  const result = user;
  console.log(result);
  return result;
}
