"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var password = "eureka";
var intentos;
for (intentos = 1; intentos <= 3; intentos++) {
    console.log("Intento: ", intentos, "/3");
    var passwordIngresado = rls.question("Para ingresar coloque su password: ");
    if (password == passwordIngresado) {
        console.log("Bienvenido, se ha loggeado exitosamente");
        break;
    }
    else {
        if (intentos < 3) {
            console.log("Pruebe nuevamente");
        }
        else {
            console.log("Supero el limite de intentos y no se podra loggear");
        }
    }
}
