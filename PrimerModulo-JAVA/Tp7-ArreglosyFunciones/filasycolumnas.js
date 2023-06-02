"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Arreglo de 1 x 10 (una fila)
var arregloSimple = new Array(10);
//Crear matriz de 10x10
/*
let filas: Array <number>[] = new Array (10):
for (let i: number = 0; i < filas.length; i++){
    filas[i] = new Array (10);
}
*/
//Crear matriz de 10x10
var filas = new Array(10);
for (var i = 0; i < filas.length; i++) {
    filas[i] = new Array(10);
}
//recorro la matriz para el i = 0, recorro las 10 j (osea lleno x columna)
for (var i = 0; i < filas.length; i++) {
    var columnas = filas[i];
    for (var j = 0; j < columnas.length; j++)
        columnas[j] = 0;
}
/*
otra opcion de recorrer la matriz
for (let i: number = 0; i < filas.length; i++){
        for (let j: number = 0; j < filas[i].length; j++)
        filas[i][j] = 1;
}
*/
filas[2][3] = 1;
filas[3][3] = 1;
filas[4][3] = 1;
filas[5][3] = 1;
filas[8][3] = 1;
filas[8][4] = 1;
filas[8][5] = 1;
filas[8][6] = 1;
for (var i = 0; i < filas.length; i++) {
    console.log(filas[i].join('    '));
}
var sigueJuando = true;
while (sigueJuando) {
    var fila = rls.questionInt("Ing fila: ");
    var columna = rls.questionInt("Ing columna: ");
    var valorSeleccionado = filas[fila][columna];
    if (valorSeleccionado == 1) {
        console.log("Tocado");
        filas[fila][columna] = 0;
    }
    else {
        console.log("Agua");
    }
    var encontreUnUno = false;
    for (var i = 0; i < filas.length; i++) {
        var columnas = filas[i];
        for (var j = 0; j < columnas.length; j++)
            if (columnas[j] == 1) {
                encontreUnUno = true;
            }
    }
    sigueJuando = encontreUnUno;
}
