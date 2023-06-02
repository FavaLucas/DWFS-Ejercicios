"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
// vender pasajes de colectivo  20 filas 3 columnas
// 0 = asiento vacio y 1 asiento ocupado
// iniciar todo en 0 y luego ocupar algunos asientos random
// cuando alquien quiere comprar, mostrar disponibles
//Funcion para crear una Matriz bidimensional
function crearAsientos(f, c) {
    var matriz = new Array(f);
    for (var i = 0; i < f; i++) {
        matriz[i] = new Array(c);
    }
    return matriz;
}
/**
 *Funcion para generar un numero aleatorio entero entre un Minimo y un Maximo
*/
function numeroAleatorioMaxMin(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Funcion para asignar aleatoriamente ocupaciones (con 0 y 1) a la matriz
function completarAleatoriamente(matriz, f, c) {
    //Filas
    for (var i = 0; i < f; i++) {
        //Columnas
        for (var j = 0; j < c; j++) {
            matriz[i][j] = numeroAleatorioMaxMin(0, 1);
        }
    }
}
//Funcion para motrar las butacas disponibles al ususario
function mostrarAsientos(arreglo, fil, col) {
    for (var i = 0; i < fil; i++) {
        console.log("Fila ", i, ": ", arreglo[i].join(" | "));
    }
}
/**
 * Funcion para devolver estado de ocupacion de mi asiento
 * @param arreglo
 * @param fil
 * @param col
 * @returns
 */
function comprobarEstado(arreglo, fil, col) {
    return arreglo[fil][col];
}
//Declaro variables
var filas = rls.questionInt("Ingrese la cantidad de filas del colectivo: ");
var columnas = rls.questionInt("Ingrese la cantidad de columnas del colectivo: ");
//Defino colectivo como una matriz que se creara llamando a la funcion crearMartiz()
var colectivo = crearAsientos(filas, columnas);
//Inicio mi programa
completarAleatoriamente(colectivo, filas, columnas);
mostrarAsientos(colectivo, filas, columnas);
var pasajeFila = rls.questionInt("Ingrese fila que desee: ");
var pasajeColumna = rls.questionInt("Ingrese columna que desee: ");
var estado = comprobarEstado(colectivo, pasajeFila, pasajeColumna);
if (estado == 1) {
    console.log("El asiento esta Ocupado");
}
else
    console.log("El asiento esta Libre");
