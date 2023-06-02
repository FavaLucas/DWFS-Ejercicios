"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro funciones
function pidoLimite() {
    var limite = rls.questionInt("Ingrese el tope de numeros que desea sumar: ");
    return limite;
}
function sumaNnumerosNaturales(n) {
    var resultado = 0;
    for (var i = 0; i <= n; i++) {
        resultado = resultado + i;
    }
    return resultado;
}
//Inicio del programa
console.log("El resultado es: ", sumaNnumerosNaturales(pidoLimite()));
