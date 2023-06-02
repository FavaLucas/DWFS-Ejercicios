"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var palabras = new Array(29);
palabras[0] = 'enciclar';
palabras[1] = 'fugitivo';
palabras[2] = 'abordaje';
palabras[3] = 'atravesar';
palabras[4] = 'balancear';
palabras[5] = 'compartir';
palabras[6] = 'descubrir';
palabras[7] = 'empujar';
palabras[8] = 'felicidad';
palabras[9] = 'generador';
palabras[10] = 'habitante';
palabras[11] = 'ilusion';
palabras[12] = 'jornada';
palabras[13] = 'justicia';
palabras[14] = 'kilometro';
palabras[15] = 'laborioso';
palabras[16] = 'malvado';
palabras[17] = 'navegador';
palabras[18] = 'observar';
palabras[19] = 'palacio';
palabras[20] = 'querencia';
palabras[21] = 'rechazar';
palabras[22] = 'sorpresa';
palabras[23] = 'tamborileo';
palabras[24] = 'urgente';
palabras[25] = 'valorar';
palabras[26] = 'xenofobia';
palabras[27] = 'yacimiento';
palabras[28] = 'zambullir';
//Funcion para desordenar la palabra
function desordenarPalabra(palabraOrdenada) {
    //La palabra elegida la transformamos en un arreglo para poder cambiar las letras de orden
    var arrPalabra = new Array(palabraOrdenada.length);
    for (var i = 0; i < palabraOrdenada.length; i++) {
        arrPalabra[i] = palabraOrdenada[i];
    }
    for (var i = 0; i < arrPalabra.length; i++) {
        var auxLetra = "";
        var indiceAleatorio_1 = Math.random() * arrPalabra.length;
        indiceAleatorio_1 = Math.floor(indiceAleatorio_1);
        //i es el indice actual de la letra
        //indiceAleatorio es el indice de la letra que voy a intercambiar
        auxLetra = arrPalabra[i];
        arrPalabra[i] = arrPalabra[indiceAleatorio_1];
        arrPalabra[indiceAleatorio_1] = auxLetra;
    }
    var palabraDesordenada = "";
    for (var i = 0; i < arrPalabra.length; i++) {
        palabraDesordenada += arrPalabra[i];
    }
    return palabraDesordenada;
}
//Elijo un indice aleatorio
var indiceAleatorio = Math.random() * palabras.length;
indiceAleatorio = Math.floor(indiceAleatorio);
//Selecciono la palabra dentro de mi arreglo
var palabraJugar = palabras[indiceAleatorio];
//Guardo la palabra elegida, pero desordenada en mi nueva variable para jugar
var palabraDesordenadaJugar = desordenarPalabra(palabraJugar);
var acerto = false;
var intentos = 0;
while (!acerto && intentos < 10) {
    console.clear();
    console.log("Su palabra desordenada es: " + palabraDesordenadaJugar);
    console.log("Tiene " + (10 - intentos) + "intentos");
    var palabraIngresada = rls.question("Escriba la palabra ordenada: ");
    if (palabraIngresada == palabraJugar) {
        acerto = true;
    }
    else {
        intentos++;
    }
}
if (acerto) {
    console.log("Felicitaciones gano!");
}
else {
    console.log("Perdio");
}
