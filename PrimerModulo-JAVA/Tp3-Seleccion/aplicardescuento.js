"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var valor = rls.questionInt("Ingrese el valor del Articulo que comprara: ");
var cantidad = rls.questionInt("Ingrese la cantidad de Articulos que comprara :");
var precioTotal = valor * cantidad;
//descuento solo se utilizara si precioTotal > a 1000
var descuento = 0;
var precioTotalConDescuento = 0;
if (precioTotal > 1000) {
    descuento = (precioTotal * 10) / 100;
    precioTotalConDescuento = precioTotal - descuento;
    console.log("Por haber gastado mas de 1000 en su compra tiene un 10% de Descuento");
    console.log("El valor a pagar es de:", precioTotalConDescuento);
}
else {
    console.log("El monto a pagar es de: ", precioTotal);
}
