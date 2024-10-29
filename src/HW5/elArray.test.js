/* eslint-disable no-undef */
import { doubleArray, sumArray } from './elArray.js';

const arrayInput = [17, 2, 38, 4, 57, 6, 78, 8, 94, 10];
describe('doubleArray', () => {
  it('should be a function', () => {
    expect(doubleArray).toBeInstanceOf(Function);
  });
});
const clone = doubleArray(arrayInput);
test('Multiply array by 2', () => {
  expect(clone).toEqual([34, 4, 76, 8, 114, 12, 156, 16, 188, 20]);
});

describe('sumArray', () => {
  it('should be a function', () => {
    expect(sumArray).toBeInstanceOf(Function);
  });
});
const summa = sumArray(arrayInput);
test('find the sum of array elements', () => {
  expect(summa).toEqual(314);
});
