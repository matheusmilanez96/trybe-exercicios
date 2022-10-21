let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//imprimir array
console.log(numbers);

//somar valores
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
}
console.log(soma);

//média
let media = soma / numbers.length;
console.log(media);