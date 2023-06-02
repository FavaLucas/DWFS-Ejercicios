"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var usuario = "Juan";
var contraseña = "claveJuan";
var usuarioIngresado = rls.question("Ingrese su usuario: ");
var contraseñaIngresada = rls.question("Ingrese su contraseña: ");
if (usuario == usuarioIngresado && contraseña == contraseñaIngresada) {
    console.log("Bienvenido, ha ingresado al ejercicio");
}
else {
    console.log("Ha ingresado datos invalidos, no puede ingresar.");
}
