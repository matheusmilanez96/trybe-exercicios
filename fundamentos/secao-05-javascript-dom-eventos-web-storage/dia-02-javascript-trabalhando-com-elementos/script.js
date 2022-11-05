console.log(document.querySelector("#elementoOndeVoceEsta"));

document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "purple";

document.querySelector("#primeiroFilhoDoFilho").innerText = "Olá mundo!";

console.log(document.querySelector("#pai").firstElementChild);

console.log(document.querySelector("#elementoOndeVoceEsta").previousElementSibling);

console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);

console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling.nextElementSibling);

console.log(document.querySelector("#pai").lastElementChild.previousElementSibling);
