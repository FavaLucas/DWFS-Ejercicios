"use strict";
exports.__esModule = true;
//Defino un arreglo unidimensional donde guardo los nombres de mis 5 vendedores
var vendedores = ["Andres", "Marianela", "Sandra", "Marcos", "Adriana"];
//Defino un arreglo unidimensional para cada vendedor donde guardo las ventas de cada semana (12 en total // 3 trimestes de 4 semanas c/u)
var ventasAndres = [33558, 36165, 34240, 39273, 34360, 21347, 20817, 21494, 23062, 31908, 31369, 30658];
var ventasMarianela = [27541, 32480, 25053, 34823, 32942, 38477, 23757, 21422, 26699, 22045, 25625, 25866];
var ventasSandra = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25168, 26759, 29793, 36218];
var ventasMarcos = [27243, 38777, 21346, 30691, 27542, 39771, 31807, 31641, 18850, 39837, 40182, 28006];
var ventasAdriana = [32687, 25217, 26844, 37033, 35244, 25702, 25781, 35525, 34874, 34841, 20563];
//Defino las variables mejorSemana y mejorMes para guardar el resultado de las funciones: obtenerMejorSemana y obtenerMejorSemana
var mejorSemana = 0;
var mejorMes = 0;
//Creo una funcion para calcular el promedio semanal enviando como parametros y las ventas, retorno el valor del promedio
function calcularPromedioSemanal(ventas) {
    var promedioSemanal = 0;
    var sumatoriaVentaSemanal = 0;
    for (var i = 0; i < ventas.length; i++) {
        sumatoriaVentaSemanal = sumatoriaVentaSemanal + ventas[i];
        promedioSemanal = sumatoriaVentaSemanal / ventas.length;
    }
    return promedioSemanal;
}
function calcularPromedioMensual(ventas) {
    var trimestre = new Array(3);
    trimestre[0] = (ventas[0] + ventas[1] + ventas[2] + ventas[3]) / 4;
    trimestre[1] = (ventas[4] + ventas[5] + ventas[6] + ventas[7]) / 4;
    trimestre[2] = (ventas[8] + ventas[9] + ventas[10] + ventas[11]) / 4;
    return trimestre;
}
//Funcion para obtener la mejor semana de 1 vendedor
function obtenerMejorSemana(ventas) {
    //Variable para guardar la venta maxima del vendedor
    var ventaMaxima = ventas[0];
    //Variable para guardar la mejor semana del vendedor
    var mejorSemana = 0;
    for (var i = 0; i < ventas.length; i++) {
        if (ventaMaxima < ventas[i]) {
            ventaMaxima = ventas[i];
            //A la mejor semana le sumo 1 para no iniciar de la semana 0
            mejorSemana = i + 1;
        }
    }
    return mejorSemana;
}
//INICIO DE MI PROGRAMA
//EJERCIOCIO A
console.log("----------------------Promedios Semanales --------------------------");
console.log("El promedio semanal de", vendedores[0], "es de: ", calcularPromedioSemanal(ventasAndres));
console.log("El promedio semanal de", vendedores[1], "es de: ", calcularPromedioSemanal(ventasMarianela));
console.log("El promedio semanal de", vendedores[2], "es de: ", calcularPromedioSemanal(ventasSandra));
console.log("El promedio semanal de", vendedores[3], "es de: ", calcularPromedioSemanal(ventasMarcos));
console.log("El promedio semanal de", vendedores[4], "es de: ", calcularPromedioSemanal(ventasAdriana));
//EJERCIOCIO A
console.log("---------------------Promedios Mensuales----------------------------");
console.log("El promedio de ventas del mes es de:", vendedores[0], "es de: ", calcularPromedioMensual(ventasAndres));
console.log("El promedio de ventas del mes es de:", vendedores[1], "es de: ", calcularPromedioMensual(ventasMarianela));
console.log("El promedio de ventas del mes es de:", vendedores[2], "es de: ", calcularPromedioMensual(ventasSandra));
console.log("El promedio de ventas del mes es de:", vendedores[3], "es de: ", calcularPromedioMensual(ventasMarcos));
console.log("El promedio de ventas del mes es de:", vendedores[4], "es de: ", calcularPromedioMensual(ventasAdriana));
//EJERCIOCIO C
console.log("---------------------Mejor Semana y Mes ----------------------------");
