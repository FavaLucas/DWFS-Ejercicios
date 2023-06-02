"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var precio = rls.questionInt("Ingrese el precio del articlo que desea comprar: ");
var cantidad = rls.questionInt("Ingrese cantidad de articulos que desea comprar: ");
var precioTotal = precio * cantidad;
var precioConDescuento = precioTotal * 0.85;
var mes = rls.question("Ingrese el mes en que realiza la compra: ");
if (mes == "Octubre") {
    console.log("Por comprar en Octubre obtiene un 15% de descuento y el valor a abonar sera;", precioConDescuento);
}
else {
    console.log("Su compra no tiene descuento, el valor es: ", precioTotal);
}
