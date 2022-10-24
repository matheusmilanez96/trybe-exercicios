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