"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Crear una funcion camel case para pasar las mayusculas a minusculas y viceversa 
var palabraClave = rls.question("Ingrese la palabra que quiera convertir en clave: ");
var password = "";
function convertirPalabraEnClave(palabra) {
    var clave = "";
    var vocales = "aeiuo";
    var signos = ".,;:!";
    var numerosOperadores = "0123456789+-*/";
    for (var i = 0; i < palabra.length; i++) {
        if (numerosOperadores.indexOf(palabra[i]) >= 0) {
            clave += palabra[i];
        }
        else {
            if (vocales.indexOf(palabra[i]) >= 0) {
                //ver si esto funciona, sino cambiar aca
                clave += signos[vocales.indexOf(palabra[i])];
            }
            else {
                if (palabra[i] == palabra[i].toUpperCase())
                    clave += palabra[i].toLowerCase();
                else
                    clave += palabra[i].toUpperCase();
            }
        }
    }
    return clave;
}
console.log("La palabra ingresada es: ", palabraClave);
password = convertirPalabraEnClave(palabraClave);
console.log("La clave sera: ", password);
