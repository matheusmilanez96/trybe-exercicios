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

//valor final
if (numbers[numbers.length - 1] > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor or igual a 20")
}

//maior valor
let maiorNumero = numbers[0];
for (let j = 1; j < numbers.length; j += 1) {
    if (numbers[j] > maiorNumero) {
        maiorNumero = numbers[j];
    }
}
console.log("Maior valor: " + maiorNumero)

//valores ímpares
let totalImpares = 0
for (let k = 0; k < numbers.length; k += 1) {
    if (numbers[k] % 2 != 0) {
        totalImpares += 1;
    }
}
console.log("Total de impares: " + totalImpares)