"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese el primer numero: ");
var numero2 = rls.questionInt("Ingrese el segundo numero: ");
var actual, suma, auxiliar;
if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}
actual = numero1;
suma = 0;
while (actual <= numero2) {
    suma = suma + actual;
    actual++;
}
console.log("El resultado de la suma es:", suma);
