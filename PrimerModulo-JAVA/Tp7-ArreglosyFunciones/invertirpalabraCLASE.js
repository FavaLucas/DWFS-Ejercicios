"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var palabra = rls.question("Ingrese palabra: ");
var inverso = "";
for (var i = palabra.length - 1; i >= 0; i--) {
    inverso += palabra[i];
}
console.log(inverso);
