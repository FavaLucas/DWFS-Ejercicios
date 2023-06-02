"use strict";
/*cuantos dados tiene?
probabilidad de sacar 6 = 1/6

probabilidad con N dados = 1/6 * 1/6 * 1/6 *N veces segun dados tenga
*/
exports.__esModule = true;
var rls = require("readline-sync");
var cantidadDados = rls.questionInt("Cuantos dados va a tirar: ");
var probabilidad = 1 / 6;
var probabilidadTotal = 1;
for (var i = 1; i <= cantidadDados; i++) {
    probabilidadTotal = probabilidadTotal * probabilidad;
}
console.log("Por la cantidad de dados que tirar, la probabilidad de sacar todos 6 es de: ", probabilidadTotal);
