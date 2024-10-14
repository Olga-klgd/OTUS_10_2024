/* eslint-disable no-undef */
import { whoIsYoungerFind } from './whoIsYoungerFind';

describe('whoIsYoungerFind', () => {
  it('should be a function', () => {
    expect(whoIsYoungerFind).toBeInstanceOf(Function);
  });
});
describe('whoIsYoungerFind', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      userFirst: '2000-07-11',
      userSecond: '2020-07-11',
      result: 'первый старше',
    },
    {
      userFirst: '2000-08-03',
      userSecond: '1999-07-11',
      result: 'второй старше',
    },
    {
      userFirst: '2000-07-10',
      userSecond: '2000-07-10',
      result: 'они ровесники',
    },
  ].forEach(({ userFirst, userSecond, result }) => {
    it(`prints '${result}' for ${userFirst} and ${userSecond}`, () => {
      const answer = whoIsYoungerFind(userFirst, userSecond);
      expect(answer).toBe(result);
    });
  });
});
