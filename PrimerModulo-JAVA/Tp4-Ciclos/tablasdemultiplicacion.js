"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var tablaMultiplicar = rls.questionInt("Que taba de multiplicar desea hacer? ");
var limiteTabla = rls.questionInt("Hasta que numero desea multiplicar? ");
var resultado = 0;
for (var contador = 1; contador <= limiteTabla; contador++) {
    resultado = tablaMultiplicar * contador;
    console.log(tablaMultiplicar, "x", contador, "=", resultado);
}
