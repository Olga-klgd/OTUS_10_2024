/* eslint-disable quotes */
// .Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.
export function isWord(str) {
  const probel = str.indexOf(' ');
  const result = probel < 0;
  console.log(result);
  return result;
}
