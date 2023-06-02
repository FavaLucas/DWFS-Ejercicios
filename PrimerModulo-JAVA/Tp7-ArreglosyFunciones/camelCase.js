"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var palabra = rls.question("Ingrese una frase: ");
var resultado = " ";
palabra = palabra.trim();
var proxiMay = false;
for (var index = 0; index < palabra.length; index++) {
    var letra = palabra[index];
    if (letra == " ") {
        proxiMay = true;
    }
    else {
        if (proxiMay) {
            resultado += letra.toUpperCase();
            proxiMay = false;
        }
        else {
            resultado += letra;
        }
    }
}
console.log(resultado);
