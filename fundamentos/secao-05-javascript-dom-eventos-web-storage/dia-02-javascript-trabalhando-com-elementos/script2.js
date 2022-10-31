let irmaoElemento = document.createElement("section");
irmaoElemento.innerText = "oi";
document.querySelector("#pai").appendChild(irmaoElemento);

let filhoElemento = document.createElement("section");
filhoElemento.innerText = "olá";
document.querySelector("#elementoOndeVoceEsta").appendChild(filhoElemento);

let filhoDoFilhoDoFilho = document.createElement("section");
filhoDoFilhoDoFilho.innerText = "hello";
document.querySelector("#primeiroFilhoDoFilho").appendChild(filhoDoFilhoDoFilho);

console.log(document.querySelector("#primeiroFilhoDoFilho").firstChild.parentElement.parentElement.nextElementSibling);