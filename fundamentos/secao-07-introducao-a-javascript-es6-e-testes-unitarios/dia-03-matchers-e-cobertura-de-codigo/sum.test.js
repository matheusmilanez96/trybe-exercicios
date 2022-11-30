const sum = require('./sum');

describe('a função sum', () => {
  it('testa se a soma está correta', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  });
  it('testa se lança erro correto', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
});
