// Написать программу, которая выводит в консоль количество минут,
// прошедшее с начала сегодняшнего дня.

function howManyMinutes() {
  const dateNow = new Date();
  console.log(dateNow.getHours() * 60 + dateNow.getMinutes());
}
export { howManyMinutes };
