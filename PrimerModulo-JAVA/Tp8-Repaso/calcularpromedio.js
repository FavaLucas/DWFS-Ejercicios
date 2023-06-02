"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Pido cantidad de alumnos y creo mi arreglo segun el tamaño ingresado
var cantAlumnos = rls.questionInt("Cuantos alumnos tiene en su equipo: ");
var equipo = new Array(cantAlumnos);
//Funcion para generar un numero aleatorio entero entre un min y un max
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Funcion para cargar un arreglo posicion por posicion con un numero aleatorio
function cargarArregloAleatorio(equipo) {
    for (var i = 0; i < equipo.length; i++) {
        equipo[i] = generarNumeroAleatorio(3, 7);
    }
    return equipo;
}
//Funcion para calcular el promedio de mi arreglo
function obtenerPromedio(equipo) {
    var promedio, suma = 0;
    for (var i = 0; i < equipo.length; i++) {
        suma = (suma + equipo[i]);
    }
    promedio = suma / equipo.length;
    return promedio;
}
//Funcion para mostrar mi arreglo como una linea
function mostrarArreglo(equipo) {
    var linea = "";
    for (var i = 0; i < equipo.length; i++) {
        linea += " ".concat(equipo[i], ",");
    }
    console.log(linea);
}
//Inicio del Programa
cargarArregloAleatorio(equipo);
console.log("Las edades de los jugadores son:", equipo);
console.log("El promedio de edad del equipo es:", obtenerPromedio(equipo), "años");
console.log(mostrarArreglo(equipo));
