// fatorial de 10

let total = 1;
let fatorial = 10;
for (let n = 1; n <= fatorial; n += 1) {
    total = total * n;
}
console.log(total);

//inverter palavra
let word = "tryber"
let palavraInvertida = "";
for (let i = 1; i <= word.length; i += 1) {
    palavraInvertida += word[word.length - i];
}
console.log(palavraInvertida);

//maior e menor palavras
let array = ['java', 'javascript', 'python', 'html', 'css'];
let indexMaior = 0;
let indexMenor = 0;

for (let j = 0; j < array.length; j += 1) {
    if (array[j].length > array[indexMaior].length) {
        indexMaior = j;
    }
}
console.log(array[indexMaior]);

for (let k = 0; k < array.length; k += 1) {
    if (array[k].length < array[indexMenor].length) {
        indexMenor = k;
    }
}
console.log(array[indexMenor]);