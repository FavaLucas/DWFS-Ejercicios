"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
/*
Hacer un programa para jugar piedra papel o tijera contra la PC
-- El programa elige aleatoriamente un opcion
-- El programa le pide al usuario que ingrese por consola
-- Se muestra por consola si gano la PC o gano el usuario
*/
var vectorJuego = new Array(3);
vectorJuego[0] = "Piedra";
vectorJuego[1] = "Papel";
vectorJuego[2] = "Tijera";
var eleccionUsuario = rls.question("Ingrese la opcion que quiera jugar: Piedra, Papel o Tijera: ");
//Selecciono un indice al azar que utilizo para reordenar luego mi arreglo
function generarIndiceAlAzar(dimension) {
    var indiceJuego = Math.random() * dimension;
    indiceJuego = Math.floor(indiceJuego);
    return indiceJuego;
}
//Funcion para desordenar el arreglo de forma aleatoria
function desordenarArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var auxLetra = "";
        var indiceJuego = generarIndiceAlAzar(arreglo.length);
        auxLetra = arreglo[i];
        arreglo[i] = arreglo[indiceJuego];
        arreglo[indiceJuego] = auxLetra;
    }
    return arreglo;
}
(desordenarArreglo(vectorJuego));
var seleccionPC = vectorJuego[generarIndiceAlAzar(vectorJuego.length)];
console.log("La eleccion de la PC es", seleccionPC);
if (eleccionUsuario == seleccionPC) {
    console.log("Gano");
}
else {
    console.log("No acerto, intente nuevamente");
}
