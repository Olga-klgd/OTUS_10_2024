/* eslint-disable no-undef */
import { isWord } from './isWord.js';

describe('isWord', () => {
  it('should be a function', () => {
    // eslint-disable-next-line no-undef
    expect(isWord).toBeInstanceOf(Function);
  });
});

describe('isWord', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { str: 'sdf sdfkkkkkkkkk', result: false },
    { str: 'sdfsdfkkkkkkkkk', result: true },
    { str: 'sdf sdfkk kkkkkkk', result: false },
  ].forEach(({ str, result }) => {
    it(`prints '${result}' for ${str}`, () => {
      const logSpy = jest.spyOn(console, 'log');
      isWord(str);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
