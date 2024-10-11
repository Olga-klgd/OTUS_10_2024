/* eslint-disable no-plusplus */
// Вывести в консоль сумму цифр от 50 до 100
export function sumNumber() {
  let result = 0;
  for (let i = 50; i <= 100; i++) {
    result += i;
  }
  console.log(result);
  return result;
}
