"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var precioProducto = Number(readlineSync.question("Ingrese el Precio del Producto: "));
//  let precioProducto :number = readlineSync.question.Int("Ingrese el Precio del Producto: ");
var descuento = precioProducto * 0.1;
var precioFinal = precioProducto - descuento;
console.log("El Precio Final, con el descuento realizado es de:", precioFinal);
//import * as readlineSync from 'readline-sync';
//let alturaRectangulo :number = Number(readlineSync.question("Ingrese la Altura del Rectangulo: ")); //aca el valor ingresado es un string y lo convierto en numero usando la funcion Number
// otra opcion es hacer asi: let alturaRectangulo :number = readlineSync.questionInt("Ingrese la Altura del Rectangulo: ");
//let baseRectangulo :number = Number(readlineSync.question("Ingrese la Base del Rectangulo: "));
// otra opcion es hacer asi: let baseRectangulo :number = readlineSync.questionInt("Ingrese la Base del Rectangulo: ");
//let areaDelRectangulo : number = alturaRectangulo * baseRectangulo;
//console.log("Altura:", alturaRectangulo);
//console.log ("El Area del Rectangulo es", areaDelRectangulo);
