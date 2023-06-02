"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var filas = rls.questionInt("Ingrese la cantidad de filas que tiene el cine: ");
var butacas = rls.questionInt("Ingrese la cantidad de butacas que tiene el cine: ");
var cine;
function crearCine(filas, butacas) {
    cine = new Array(filas);
    for (var i = 0; i < cine.length; i++) {
        cine[i] = new Array(butacas);
    }
    return cine;
}
//Funcion para cargar mi arreglo con valores aleatorios 0 (False/vacias) y 1 (true/ocupada)
function cargarAleatorio(matriz, fila, columna) {
    for (var i = 0; i < fila; i++) {
        for (var j = 0; j < columna; j++) {
            if ((Math.floor(Math.random() * 2)) == 0) {
                matriz[i][j] = false;
            }
            else {
                matriz[i][j] = true;
            }
        }
    }
    return matriz;
}
//Cuanto la cantidad de False de mi vector para saber cuantas butacas vacias tengo
function controlarVacios(matriz, fila, columna) {
    var vacios = 0;
    for (var i = 0; i < fila; i++) {
        for (var j = 0; j < columna; j++) {
            if (matriz[i][j] == false)
                vacios++;
        }
    }
    return vacios;
}
//Inicio mi programa
cine = crearCine(filas, butacas);
cargarAleatorio(cine, filas, butacas);
console.log(cine);
console.log("La cantidad de butacas vacias es de: ", controlarVacios(cine, filas, butacas));
