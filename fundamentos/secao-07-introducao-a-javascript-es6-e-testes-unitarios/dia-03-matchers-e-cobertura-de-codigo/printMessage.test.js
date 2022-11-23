const {
    info,
    printMessage,
} = require('./printMessage');

describe('a função printMessage', () => {
  it('testa se o objeto possui o parâmetro', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('testa se o retorno contém Boas Vindas', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
});