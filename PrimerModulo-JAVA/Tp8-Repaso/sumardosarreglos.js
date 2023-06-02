"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var dimension = rls.questionInt("Ingrese la dimension que desee para sus arreglos: ");
var arreglo1 = new Array(dimension);
var arreglo2 = new Array(dimension);
var arregloSuma = new Array(dimension);
//Funcion para cargar un arreglo con numeros aleatorios entre 0 y 100
function generoNumeroAzar() {
    var numeroRandom = Math.floor(Math.random() * 100);
    /*
    Otra opcion de hacer random es:
    let numeroRandom = Math.random() * 100;
    Math.round(numeroRandom)
    return Math.round(numeroRandom)
    */
    return numeroRandom;
}
//Funcion cargo arreglos segun dimension ingresada
function cargarArregloAleatorio(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        arreglo[i] = generoNumeroAzar();
    }
    return arreglo;
}
//Funcion para sumar 2 arreglos 
function sumar2Arreglos(arreloA, arregloB, arregloSum, dim) {
    for (var i = 0; i < dim; i++) {
        arregloSum[i] = arreloA[i] + arregloB[i];
    }
    return arregloSum;
}
//Funcion para mostrar 1 areglo concatenando
function mostrarArreglo(arregloA) {
    var linea = "";
    for (var i = 0; i < arregloA.length; i++) {
        linea += " ".concat(arregloA[i], ",");
    }
    console.log(linea);
}
cargarArregloAleatorio(arreglo1);
console.log(arreglo1);
mostrarArreglo(arreglo1);
cargarArregloAleatorio(arreglo2);
console.log(arreglo2);
mostrarArreglo(arreglo2);
sumar2Arreglos(arreglo1, arreglo2, arregloSuma, dimension);
console.log(arregloSuma);
mostrarArreglo(arregloSuma);
