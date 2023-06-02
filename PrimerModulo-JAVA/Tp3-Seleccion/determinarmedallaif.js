"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var posicionLlegada = rls.questionInt("En que posicion de la carrera llego?");
if (posicionLlegada == 1) {
    console.log("Felicitaciones, gano Medalla de Oro");
}
else {
    if (posicionLlegada == 2) {
        console.log("Felicitaciones, gano Medalla de Plata");
    }
    else {
        if (posicionLlegada == 3) {
            console.log("Felicitaciones, gano Medalla de Bronce");
        }
        else {
            console.log("Gracias por participar, esperamos que la proxima vez obtenga un podio");
        }
    }
}
