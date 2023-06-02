"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese el primer numero: ");
var numero2 = rls.questionInt("Ingrese el segundo numero: ");
var numero3 = rls.questionInt("Ingrese el tercer numero: ");
if ((numero1 > numero2) && (numero1 > numero3)) {
    console.log("El numero", numero1, "es el mayor");
}
else if ((numero2 > numero1) && (numero2 > numero3)) {
    console.log("El numero", numero2, "es el mayor");
}
else if ((numero3 > numero1) && (numero3 > numero2)) {
    console.log("El numero", numero3, "es el mayor");
}
