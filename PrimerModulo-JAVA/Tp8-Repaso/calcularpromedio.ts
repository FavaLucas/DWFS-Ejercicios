import * as rls from "readline-sync";

//Pido cantidad de alumnos y creo mi arreglo segun el tamaño ingresado
let cantAlumnos: number = rls.questionInt("Cuantos alumnos tiene en su equipo: ");
let equipo: number[] = new Array(cantAlumnos);

//Funcion para generar un numero aleatorio entero entre un min y un max
function generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Funcion para cargar un arreglo posicion por posicion con un numero aleatorio
function cargarArregloAleatorio(equipo: number[]): number[] {
    for (let i: number = 0; i < equipo.length; i++) {
        equipo[i] = generarNumeroAleatorio(3, 7);
    }
    return equipo;
}
//Funcion para calcular el promedio de mi arreglo
function obtenerPromedio(equipo: number[]): number {
    let promedio, suma: number = 0;
    for (let i: number = 0; i < equipo.length; i++) {
        suma = (suma + equipo[i]);
    }
    promedio = suma / equipo.length;
    return promedio;
}

//Funcion para mostrar mi arreglo como una linea
function mostrarArreglo(equipo: number[]) {
    let linea: string = "";
    for (let i: number = 0; i < equipo.length; i++) {
        linea += ` ${equipo[i]},`;
    }
    console.log(linea);
}



//Inicio del Programa
cargarArregloAleatorio(equipo);
console.log("Las edades de los jugadores son:", equipo);
console.log("El promedio de edad del equipo es:", obtenerPromedio(equipo), "años");
console.log(mostrarArreglo(equipo));