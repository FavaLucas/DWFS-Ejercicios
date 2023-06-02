"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionFloat("Ingrese Numero 1: ");
var numero2 = rls.questionFloat("Ingrese Numero 2: ");
var opcion = rls.questionFloat("Ingrese opcion,  1 para sumar, 2 para restar o cualquier tecla para salir: ");
function dibujarGuiones() {
    var i;
    var linea = "";
    for (i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}
//implementacion de calculadora pero utilizando funciones/metodos
//creamos la funcion dibujarGuines que llamaremos mas adelante
if (opcion == 1) {
    dibujarGuiones();
    console.log("El resultado de la suma es:", numero1 + numero2);
    dibujarGuiones();
}
else if (opcion == 2) {
    dibujarGuiones();
    console.log("El resultado de la resta es: ", numero1 - numero2);
    dibujarGuiones();
}
else if ((opcion != 1) && (opcion != 2)) {
    console.log("Ha pulsado una operacion invalida, vuelva a ingresar.");
}
/* si ingresa opcion 1 la calculadora suma
if (opcion == 1) {
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    console.log("Resultado: ", numero1 + numero2);
    linea = "";
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);

// si ingresa la opcion 2 la calculadora resta
}else if (opcion == 2) {
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    console.log("Resultado: ", numero1 - numero2);
    linea = "";
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}else if ((opcion != 1) && (opcion != 2)){
    console.log("Ha pulsado una operacion invalida, vuelva a ingresar.")
}
*/ 
