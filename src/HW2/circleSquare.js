// Поместится ли круг в квадрат с заданными площадями
export function circleSquare(circle, square) {
  const diametr = 2 * (Math.sqrt(circle) / Math.PI);
  const side = Math.sqrt(square);
  const result = diametr < side ? 'Поместится' : 'Не поместится';
  console.log(result);
  return result;
}
