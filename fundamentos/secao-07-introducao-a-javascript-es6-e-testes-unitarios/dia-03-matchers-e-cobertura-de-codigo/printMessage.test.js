const {
    info,
} = require('./printMessage');

describe('a função printMessage', () => {
    it('testa se o objeto possui o parâmetro', () => {
        expect(info).toHaveProperty('personagem');
    });
});