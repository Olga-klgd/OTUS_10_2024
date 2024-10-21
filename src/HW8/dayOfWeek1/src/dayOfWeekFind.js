export function dayOfWeekFind(date) {
  const dayOfWeeks = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];
  const dateTransfer = date.split('-');
  const newDate = new Date(
    dateTransfer[0],
    dateTransfer[1] - 1,
    dateTransfer[2],
  );
  const dayCount = newDate.getDay();
  const answerResult = dayOfWeeks[dayCount];
  return answerResult;
}
