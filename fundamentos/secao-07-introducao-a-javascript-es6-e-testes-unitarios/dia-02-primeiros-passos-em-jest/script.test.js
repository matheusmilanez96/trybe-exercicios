const {
    myRemove,
    myFizzBuzz,
    encode,
    decode,
 } = require('./script');

describe('testes para o myRemove()', () => {
  it('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('testes para o myFizzBuzz()', () => {
  it('deve obter o retorno esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(12)).toEqual('fizz');
    expect(myFizzBuzz(20)).toEqual('buzz');
    expect(myFizzBuzz(13)).toEqual(13);
    expect(myFizzBuzz('hello world!')).toEqual(false);
  });
});

describe('testes para encode e decode', () => {
  it('devem ser funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('vogais devem se transformar nos números corretos', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('kiwi')).toEqual('k3w3');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('uwu')).toEqual('5w5');
  });
  it('números devem se transformar nas vogais corretas', () => {
    expect(decode('1n1')).toEqual('ana');
    expect(decode('2l2')).toEqual('ele');
    expect(decode('k3w3')).toEqual('kiwi');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('5w5')).toEqual('uwu');
  });
  it('testa o número de caracteres da string', () => {
    expect(encode('hello').length).toEqual(5);
    expect(decode('h2ll4').length).toEqual(5);
  })
});