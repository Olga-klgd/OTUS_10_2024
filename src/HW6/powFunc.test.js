import { powFunc } from './powFunc.js';

// eslint-disable-next-line no-undef
describe('powFunc', () => {
  // eslint-disable-next-line no-undef
  it('should be a function', () => {
    // eslint-disable-next-line no-undef
    expect(powFunc).toBeInstanceOf(Function);
  });
});

// eslint-disable-next-line no-undef
describe('powFunc', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    jest.clearAllMocks();
  });
  [
    { a: 2, x: 5, result: 32 },
    { a: 3, x: 3, result: 27 },
    { a: 5, x: 2, result: 25 },
  ].forEach(({ a, x, result }) => {
    // eslint-disable-next-line no-undef
    it(`prints '${result}' for ${a} and ${x}`, () => {
      // eslint-disable-next-line no-undef
      const logSpy = jest.spyOn(console, 'log');
      powFunc(a, x);
      // eslint-disable-next-line no-undef
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
