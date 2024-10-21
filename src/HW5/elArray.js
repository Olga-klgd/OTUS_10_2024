// Создавйте массив целых чисет из 10 элементов
const arrayInput = [17, 2, 38, 4, 57, 6, 78, 8, 94, 10];
// Создайте новый массив на основе исходного, в  котором каждый элемент будет
// вдвое больше элемента исходного массива с таким же индексом.
export function doubleArray() {
  const clone = arrayInput.map((el) => el * 2);
  console.log(clone);
  return clone;
}
// Выведите в консоль сумму всех элементов массива.
export function sumArray() {
  const summa = arrayInput.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  console.log(summa);
  return summa;
}
