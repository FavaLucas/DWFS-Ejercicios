"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nroDeseado = rls.questionInt("Ingrese el numero que desea verificar si es mayor o no a 20: ");
if (nroDeseado > 20) {
    console.log("El numero", nroDeseado, "es mayor a 20");
}
else {
    console.log("El numero", nroDeseado, "es menor o igual a 20");
}
