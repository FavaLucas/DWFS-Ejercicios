"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var vuelta1 = readlineSync.questionFloat("Ingrese el tiempo de la Primer Vuelta: ");
var vuelta2 = readlineSync.questionFloat("Ingrese el tiempo de la Segunda Vuelta: ");
var vuelta3 = readlineSync.questionFloat("Ingrese el tiempo de la Tercera Vuelta: ");
var vuelta4 = readlineSync.questionFloat("Ingrese el tiempo de la Cuarta Vuelta: ");
/*como el dato que ingresa el usuario a nuestro programa no va a cambiar durante su ejecucion
podemos declarar constantes con const en lugar de variables con let */
//readlineSync.questionInt voy a poder cargar un numero entero
//readlineSync.questionFloat voy a poder cargar un numero decima
/*readlineSync.question voy a recibir un String,
en ese caso despues de declarar el tipo number se usa la funcion Number,
para pasar el sting a numero (con comas)*/
var tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
var tiempoPromedio = tiempoTotal / 4;
console.log("El tiempo Total es de:", tiempoTotal);
console.log("El promedio de las vueltas es de: ", tiempoPromedio);
console.clear;
