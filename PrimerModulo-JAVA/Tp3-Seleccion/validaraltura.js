"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alturaIngresada = rls.questionFloat("Ingrese altura: ");
var alturaPermitida = 1.30;
if (alturaIngresada <= alturaPermitida) {
    console.log("No es lo suficientemente alto para subir al juego");
}
else {
    console.log("Puede subir al juego, disfrute la atraccion");
}
