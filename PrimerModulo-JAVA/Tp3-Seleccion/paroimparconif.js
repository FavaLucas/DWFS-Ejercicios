"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num = rls.questionInt("Ingrese el numero a evaluar: ");
if (num == 0) {
    console.log("El numero", num, "no es par ni impar");
}
else if (num % 2 == 0) {
    console.log("El numero", num, "es par");
}
else {
    console.log("El numero", num, "es impar");
}
