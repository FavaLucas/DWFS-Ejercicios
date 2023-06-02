"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var textoUsuario = rls.question("Ingrese el texto que quiera convertir en CC: ");
var textoUsuarioSinEspacios = "";
//Funcion que quita los espacios a una cadena de caracteres
function quitarEspacios(textoUsuario) {
    return textoUsuario.split(" ").join("");
}
function textoCamelCase(textoUsuario) {
    var textoCC = "";
    var espacio = false;
    for (var i = 0; i < textoUsuario.trim().length; i++) {
        if (textoUsuario[i] == " ") {
            espacio = true;
        }
        else {
            if (espacio) {
                textoCC += textoUsuario[i].toUpperCase();
                espacio = false;
            }
            else {
                textoCC += textoUsuario[i].toLowerCase();
            }
        }
    }
    return textoCC;
}
textoUsuarioSinEspacios = textoCamelCase(textoUsuario);
console.log("El texto ingresado en formato CC es: ", textoUsuarioSinEspacios);
