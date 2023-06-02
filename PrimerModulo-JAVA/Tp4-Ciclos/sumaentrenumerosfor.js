"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese el primer numero: ");
var numero2 = rls.questionInt("Ingrese el segundo numero: ");
var actual, suma, auxiliar;
suma = 0;
if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}
for (var actual_1 = numero1; actual_1 <= numero2; actual_1++) {
    suma = suma + actual_1;
}
console.log("El resultado es:", suma);
