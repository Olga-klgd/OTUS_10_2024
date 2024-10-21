// Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа

export function askUser1(numberUser) {
  const str = `${numberUser}`;
  const strArray = str.split('');
  let summa = 0;
  for (let i = 0; i < strArray.length; i += 1) {
    summa += +strArray[i];
  }
  console.log(summa);
  return summa;
}
