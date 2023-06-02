"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
console.log("Ingreso numeros de 1 en 1 y cuando quiera terminar ingrese 0");
var numeroIngresado = rls.questionInt("Ingrese un numero, ");
var maximo = numeroIngresado;
var minimo = numeroIngresado;
var promedio = 0;
var totalNumerosIngresados = 0;
var contador = 0;
while (numeroIngresado != 0) {
    if (numeroIngresado > maximo) {
        maximo = numeroIngresado;
    }
    else {
        if ((numeroIngresado < minimo) && (numeroIngresado != 0)) {
            minimo = numeroIngresado;
        }
        contador = contador + 1;
        totalNumerosIngresados = totalNumerosIngresados + numeroIngresado;
        numeroIngresado = rls.questionInt("Ingrese nuevo numero: ");
    }
}
promedio = totalNumerosIngresados / contador;
console.log("El maximo numero ingresado es:", maximo);
console.log("El minimo numero ingresado es:", minimo);
console.log("El total de numeros ingresados fue de: ", contador);
console.log("La media entre los numeros ingresados es:", promedio);
