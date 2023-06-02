"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var valores = new Array(5);
for (var i = 0; i < valores.length; i++) {
    valores[i] = rls.questionInt("Ingrese el numero de la posicion " + i + ": ");
}
for (var i = 0; i < valores.length; i++) {
    console.log("En la posicion " + i + " el valor ingresado fue: " + valores[i]);
}
