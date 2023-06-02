"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var cantAlumnos = rls.questionInt("Ingrese la cantidad de alumnos de su curso: ");
function evaluoAula(cantA) {
    var cantidadMaxima = 40;
    var restoAulas = 0;
    var salon = "";
    //Evaluo el resto, para saber que aula asignar    
    restoAulas = cantidadMaxima - cantA;
    if (restoAulas > 10) {
        salon = "Amarilla";
        return salon;
    }
    else {
        switch (restoAulas) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                salon = "Azul";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                salon = "Verde";
                break;
        }
    }
    return salon;
}
if (cantAlumnos > 40) {
    console.log("No hay salon disponible");
}
else {
    console.log("El aula asignada es la: ", evaluoAula(cantAlumnos));
}
