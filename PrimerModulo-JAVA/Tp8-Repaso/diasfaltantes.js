"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var añoUsuario = rls.questionInt("Ingrese el periodo anual que quiere evaluar: ");
var evaluarAño = true;
var añoVector = new Array();
/**
 * Funcion para crear año comun o bisiesto
 */
function evaluarAñoBisiesto(añoUsuario) {
    var bisiesto;
    if (añoUsuario % 4 == 0) {
        bisiesto = false;
        return bisiesto;
    }
    else {
        console.log("El año elegido es bisiesto");
        bisiesto = true;
        return bisiesto;
    }
}
//Genero el año de 364 o 365 dias segun Bisiesto
function generarArreglo(bisiesto) {
    var añoGenerado = new Array();
    if (bisiesto) {
        for (var i = 0; i < 365; i++)
            añoGenerado[i] = 0;
        return añoGenerado;
    }
    else {
        for (var i = 0; i < 364; i++)
            añoGenerado[i] = 0;
        return añoGenerado;
    }
}
//Calculo los dias pasados para usar como indice en la busqueda de mi vector
function diasPasados(bisiesto, dia, mes) {
    var acumuloDiasPasados = 0;
    mes = 30 * mes;
    if (mes >= 2) {
        acumuloDiasPasados = (mes - dia) - 2;
        return acumuloDiasPasados;
    }
    else {
        acumuloDiasPasados = (mes - dia) - 1;
        return acumuloDiasPasados;
    }
}
/**
 * Cargo mi arreglo en funcion de los dias pasados por el usuario
 * @param añoVec
 * @param diasRec
 * @returns
 */
function cargarArreglo(añoVec, diasRec) {
    for (var i = 0; i < diasRec; i++) {
        añoVec[i] = 1;
    }
    return añoVec;
}
function diasQueQuedan(añoVec) {
    var contador = 0;
    for (var i = 0; i < añoVector.length; i++) {
        if (añoVec[i] == 0) {
            contador += 1;
        }
    }
    return contador;
}
//Declaro variables
evaluarAño = (evaluarAñoBisiesto(añoUsuario));
añoVector = generarArreglo(evaluarAño);
//Consulto en que dia y mes nos posicionamos, para conocer los dias recorridos
var mesUsuario = rls.questionInt("Ingrese el mes que quere evaluar: ");
var diaUsuario = rls.questionInt("Ingrese el dia que quere evaluar: ");
var diasRecorridos = 0;
diasRecorridos = (diasPasados(evaluarAño, diaUsuario, mesUsuario));
console.log(diasRecorridos);
añoVector = cargarArreglo(añoVector, diasRecorridos);
console.log("Los dias que queda son: ", diasQueQuedan(añoVector));
