/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
export function rightTriangleFind(a, b, c) {
  let arr;
  let answer;
  arr = [a, b, c];
  arr = arr.sort();
  arr[0] ** 2 + arr[1] ** 2 == arr[2] ** 2
    ? (answer = 'квадратный')
    : (answer = 'не квадратный');
  return answer;
}
export default rightTriangleFind;
