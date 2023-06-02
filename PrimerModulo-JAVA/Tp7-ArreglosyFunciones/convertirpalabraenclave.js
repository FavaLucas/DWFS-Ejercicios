"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var palabra = rls.question("Ingrese la palabra a codificar: ");
function convertirEnClave(palabra) {
    var vocales = "aeiou";
    var signos = ".,;:!";
    var matematicos = "01234567890+-*/";
    var clave = "";
    for (var i = 0; i < palabra.length; i++) {
        if (matematicos.indexOf(palabra[i] == 0)) {
            clave = clave + palabra[i];
        }
        else {
            if (vocales.indexOf(palabra[i] == 0)) {
                clave = clave + signos[vocales.indexOf(palabra[i])];
            }
            else {
                if (palabra[i] == palabra[i].toUpperCase())
                    clave = clave + palabra[i].toLowerCase;
                else
                    clave = clave + palabra[i].toUpperCase();
            }
        }
    }
    return clave;
}
convertirEnClave(palabra);
