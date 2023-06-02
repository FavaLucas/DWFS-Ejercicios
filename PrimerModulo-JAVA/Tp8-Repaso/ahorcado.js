"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var palabras = [
    'enciclar',
    'fugitivo',
    'abordaje',
    'atravesar',
    'balancear',
    'compartir',
    'descubrir',
    'empujar',
    'felicidad',
    'generador',
    'habitante',
    'ilusion',
    'jornada',
    'justicia',
    'kilómetro',
    'laborioso',
    'malvado',
    'navegador',
    'observar',
    'palacio',
    'querencia',
    'rechazar',
    'sorpresa',
    'tamborileo',
    'urgente',
    'valorar',
    'xenofobia',
    'yacimiento',
    'zambullir'
];
function imprimirTablero(arreglo) {
    var imprimir = "";
    for (var i = 0; i < arreglo.length; i++) {
        imprimir += " " + arreglo[i];
    }
    console.log(imprimir);
}
var indiceJuego = Math.random() * palabras.length;
indiceJuego = Math.floor(indiceJuego);
var palabraJugar = palabras[indiceJuego];
var longitudPalabra = palabraJugar.length;
var intentos = 0;
var tablero = new Array(longitudPalabra);
for (var i = 0; i < tablero.length; i++) {
    tablero[i] = "_";
}
console.log("Bienvenido a Ahorcado 1.0");
var usuarioGanador = false;
while (intentos < 6 && !usuarioGanador) {
    console.log("Tiene " + (6 - intentos) + " intentos");
    imprimirTablero(tablero);
    var letra = rls.question("Ingrese letra: ");
    var acertoLetra = false;
    for (var i = 0; i < palabraJugar.length; i++) {
        var lectraActual = palabraJugar[i];
        if (letra.toLowerCase() == lectraActual) {
            tablero[i] = letra;
            acertoLetra = true;
        }
    }
    if (!acertoLetra) {
        intentos++;
    }
    var hayGuion = false;
    for (var i = 0; i < tablero.length; i++) {
        if (tablero[i] == "_") {
            hayGuion = true;
        }
        usuarioGanador = !hayGuion;
    }
}
if (usuarioGanador) {
    console.log("");
    console.log("");
    console.log("Felicitaciones su palabra era: " + palabraJugar);
}
else {
    console.log("");
    console.log("");
    console.log("Perdio, suerte la proxima ");
}
