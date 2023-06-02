"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaracion de Funciones
function calcularPromedio(numero1, numero2, numero3) {
    var promedio = 0;
    promedio = (numero1 + numero2 + numero3) / 3;
    return promedio;
}
//Declaracion de Variables Globales
var n1, n2, n3 = 0;
//Inicio del Programa
n1 = rls.questionInt("Ingreso el primer valor: ");
n2 = rls.questionInt("Ingreso el segundo valor: ");
n3 = rls.questionInt("Ingreso el tercer valor: ");
console.log("El promedio de los 3 valores ingresados es: ", calcularPromedio(n1, n2, n3));
