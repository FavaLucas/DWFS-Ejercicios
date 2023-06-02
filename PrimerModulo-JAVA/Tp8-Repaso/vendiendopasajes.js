"use strict";
// Armar matriz de 20 x 3 --
// asiento vacio = 0 // ocupado = 1
// inicializar toda la matriz en 0 --
// se ofrece todos los asientos libres para comprar
exports.__esModule = true;
// funcion asientos disponibles -- reserva del pasaje
//cargo matriz al iniciar en 0 -- 
// funcion asignar asientos
var rls = require("readline-sync");
var pasajes;
//Creo una funcion para generar distintos colectivos segun pida el usuario
function crearColectivo(fila, columna) {
    pasajes = new Array(fila);
    for (var i = 0; i < pasajes.length; i++) {
        pasajes[i] = new Array(columna);
    }
    //Cargo todos los pasajes con 0
    // i fila
    // j columnas
    for (var i = 0; i < pasajes.length; i++) {
        for (var j = 0; j < pasajes[i].length; j++) {
            pasajes[i][j] = 0;
        }
    }
    return pasajes;
}
//Usuario ingresa pasaje a comprar (F/C), si la F y C existen y si el pasaje = 0, lo puedo vender
//sino no
function venderPasajes(fila, columna) {
    if (fila < pasajes.length && columna < pasajes[0].length && pasajes[fila][columna] !== 1) {
        pasajes[fila][columna] = 1;
    }
    else
        console.log("El pasaje ya fue vendido // Ingreso un pasaje inexistente");
}
function question(msj) {
    return rls.questionInt(msj);
}
pasajes = crearColectivo(10, 6);
var salio = false;
while (!salio) {
    var opcion = question("Elija opcion: 1 para ver pasajes, 2 para comprar, 0 para salir: ");
    switch (opcion) {
        case 1: {
            console.log(pasajes);
            break;
        }
        case 2: {
            var fila = question("Ingrese fila: ");
            var columna = question("Ingrese columna: ");
            venderPasajes(fila, columna);
            console.log(pasajes);
            break;
        }
        case 0: {
            salio = true;
            break;
        }
    }
}
