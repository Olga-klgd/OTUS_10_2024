export function whoIsYoungerFind(userFirst, userSecond) {
  let answer;
  const dateTransferUserFirst = userFirst.split('-');
  const newDateUserFirst = new Date(
    dateTransferUserFirst[0],
    dateTransferUserFirst[1] - 1,
    dateTransferUserFirst[2],
  );
  const dateTransferUserSecond = userSecond.split('-');
  const newDateUserSecond = new Date(
    dateTransferUserSecond[0],
    dateTransferUserSecond[1] - 1,
    dateTransferUserSecond[2],
  );
  const checkDate = newDateUserFirst.getTime() - newDateUserSecond.getTime();
  switch (true) {
    case checkDate < 0:
      answer = 'первый старше';
      break;

    case checkDate > 0:
      answer = 'второй старше';
      break;

    default:
      answer = 'они ровесники';
  }
  return answer;
}
export default whoIsYoungerFind;
