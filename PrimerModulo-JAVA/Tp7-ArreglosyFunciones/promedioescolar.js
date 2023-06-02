"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro funciones
function cargoAlumnosYNotas(alu, n1, n2, n3, n) {
    for (var i = 0; i < n; i++) {
        alu[i] = rls.question("Ingrese el nombre del alumno: ");
        n1[i] = rls.questionInt("Ingrese la 1er nota del alumno: ");
        n2[i] = rls.questionInt("Ingrese la 2da nota del alumno: ");
        n3[i] = rls.questionInt("Ingrese la 3ra nota del alumno: ");
        promedio[i] = calcularPromedio(nota1[i], nota2[i], nota3[i], cantidadAlumnos);
        console.log("El promedio de ", alu[i], "es de: ", promedio[i]);
    }
}
function calcularPromedio(n1, n2, n3, n) {
    var prom = 0;
    prom = (n1 + n2 + n3) / 3;
    return prom;
}
//Declaro Variables
var cantidadAlumnos = rls.questionInt("Ingrese la cantidad de alumnos: ");
var encontrado = false;
var indice = 0;
var alumnos = new Array(cantidadAlumnos);
var nota1 = new Array(cantidadAlumnos);
var nota2 = new Array(cantidadAlumnos);
var nota3 = new Array(cantidadAlumnos);
var promedio = new Array(cantidadAlumnos);
var promedioBuscado = 0;
//Inicio el programa
cargoAlumnosYNotas(alumnos, nota1, nota2, nota3, cantidadAlumnos);
var alumnoBuscado = rls.question("Ingrese el alumno de quien quiere concer el promedio: ");
while ((indice < cantidadAlumnos) && !encontrado) {
    if (alumnos[indice] == alumnoBuscado) {
        encontrado = true;
        promedioBuscado = (nota1[indice] + nota2[indice] + nota3[indice]) / 3;
    }
    indice = indice + 1;
}
console.log("El promedio de: ", alumnoBuscado, " es de: ", promedioBuscado);
