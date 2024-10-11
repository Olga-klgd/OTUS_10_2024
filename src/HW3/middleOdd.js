/* eslint-disable eqeqeq */
// найти среднее арифметическое нечетных чисел до n
export function middleOdd(n) {
  let lenStr = 0;
  let sum = 0;
  const nLast = n % 2 == 0 ? n - 1 : n;
  for (let i = 1; i <= nLast; i += 2) {
    sum += i;
    lenStr += 1;
  }
  const result = sum / lenStr;
  console.log(result);
  return result;
}
