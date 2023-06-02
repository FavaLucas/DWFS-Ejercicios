"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var longitud = rls.questionInt("Cuan largo desea su arreglo: ");
var numeros = new Array(longitud);
var suma = 0;
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = rls.questionInt("Ingrese un numero: ");
    suma = suma + numeros[i];
}
console.log("La suma de los numeros ingresados es", suma);
