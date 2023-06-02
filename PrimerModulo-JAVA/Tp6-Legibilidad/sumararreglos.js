"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var vector1 = new Array(6);
var vector2 = new Array(6);
var vectorsuma = new Array(6);
for (var i = 0; i < 6; i++) {
    vector1[i] = rls.questionInt("Ingrese los valores del 1er vector: ");
}
for (var i = 0; i < 6; i++) {
    vector2[i] = rls.questionInt("Ingrese los valores del 2do vector: ");
}
for (var i = 0; i < 6; i++) {
    vectorsuma[i] = vector1[i] + vector2[i];
}
console.log(vectorsuma);
