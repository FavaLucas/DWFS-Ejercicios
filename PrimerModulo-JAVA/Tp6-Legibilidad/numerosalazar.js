"use strict";
exports.__esModule = true;
function generoNumeroAzar() {
    var numeroRandom = Math.random() * 100;
    return Math.round(numeroRandom);
}
var valores = new Array(10);
for (var i = 0; i < valores.length; i++) {
    valores[i] = generoNumeroAzar();
}
console.log(valores);
