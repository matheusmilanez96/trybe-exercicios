let pessoa = {
    nome: 'Henri',
    idade: 20
}
pessoa = {
    nome: 'Luna',
    idade: 19
}
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio());

//const hello = (nome) => `Olá, ${nome}!`
//let nome = 'Ivan';
//console.log(hello(nome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));