/* eslint-disable quotes */
export function quadraticEquationFind(a, b, c) {
  let answer;
  let rootFirst;
  let rootSecond;
  const discriminant = b * b - 4 * a * c;
  console.log(discriminant);
  if (discriminant < 0) {
    answer = 'Корней нет';
  } else if (discriminant === 0) {
    rootFirst = ((-b + Math.sqrt(discriminant)) / 2) * a;
    answer = `Есть один корень: ${rootFirst}`;
  } else {
    rootFirst = ((-b + Math.sqrt(discriminant)) / 2) * a;
    rootSecond = ((-b - Math.sqrt(discriminant)) / 2) * a;
    answer = `Есть два корня: ${rootFirst} и ${rootSecond}`;
  }
  return answer;
}
export default quadraticEquationFind;
