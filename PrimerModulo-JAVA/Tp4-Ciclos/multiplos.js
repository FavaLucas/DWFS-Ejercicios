"use strict";
exports.__esModule = true;
var indice;
var cadena = "";
for (indice = 0; indice <= 100; indice++) {
    if ((indice % 2 == 0) || (indice % 3 == 0)) {
        cadena = cadena + indice + ",";
    }
}
console.log(cadena);
