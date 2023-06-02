"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var alturaRectangulo = Number(readlineSync.question("Ingrese la Altura del Rectangulo: "));
var baseRectangulo = Number(readlineSync.question("Ingrese la Base del Rectangulo: "));
var areaDelRectangulo = alturaRectangulo * baseRectangulo;
console.log("Altura:", alturaRectangulo);
console.log("El Area del Rectangulo es", areaDelRectangulo);
