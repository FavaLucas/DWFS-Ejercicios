"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var longitud = rls.questionInt("Indique la dimension del arrelgo que desea crear: ");
var vector1 = new Array(longitud);
for (var i = 0; i < longitud; i++) {
    vector1[i] = rls.questionInt("Ingrese el valor que desea agregar: ");
}
//Imprime vector de atras para adelante
for (var i = longitud - 1; i >= 0; i--) {
    console.log(vector1[i]);
}
