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
console.log("Maior valor: " + maiorNumero);

//valores ímpares
let totalImpares = 0
for (let k = 0; k < numbers.length; k += 1) {
    if (numbers[k] % 2 != 0) {
        totalImpares += 1;
    }
}
console.log("Total de impares: " + totalImpares)

//menor valor
let menorNumero = numbers[0];
for (let l = 1; l < numbers.length; l += 1) {
    if (numbers[l] < menorNumero) {
        menorNumero = numbers[l];
    }
}
console.log("Menor valor: " + menorNumero);

//1 a 25
let array = [];
for (let m = 1; m <= 25; m += 1) {
    array.push(m)
}
console.log(array);

//dividindo por 2
let array2 = []
for (let n = 0; n < array.length; n += 1) {
    array2.push(array[n] / 2);
}
console.log(array2)