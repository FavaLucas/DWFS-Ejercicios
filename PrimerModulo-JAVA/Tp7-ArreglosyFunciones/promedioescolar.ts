import * as rls from 'readline-sync';
//Declaro funciones
function cargoAlumnosYNotas(alu: string[], n1: number[], n2: number[], n3: number[], n: number) {
    for (let i: number = 0; i < n; i++) {
        alu[i] = rls.question("Ingrese el nombre del alumno: ");
        n1[i] = rls.questionInt("Ingrese la 1er nota del alumno: ");
        n2[i] = rls.questionInt("Ingrese la 2da nota del alumno: ");
        n3[i] = rls.questionInt("Ingrese la 3ra nota del alumno: ");
        promedio[i] = calcularPromedio(nota1[i], nota2[i], nota3[i], cantidadAlumnos);
        console.log("El promedio de ", alu[i], "es de: ", promedio[i]);
    }
}

function calcularPromedio(n1: number, n2: number, n3: number, n: number): number {
    let prom: number = 0;
    prom = (n1 + n2 + n3) / 3;
    return prom
}

//Declaro Variables
let cantidadAlumnos: number = rls.questionInt("Ingrese la cantidad de alumnos: ");

let encontrado: boolean = false;
let indice: number = 0;

let alumnos: string[] = new Array(cantidadAlumnos);
let nota1: number[] = new Array(cantidadAlumnos);
let nota2: number[] = new Array(cantidadAlumnos);
let nota3: number[] = new Array(cantidadAlumnos);
let promedio: number[] = new Array(cantidadAlumnos);
let promedioBuscado: number = 0;

//Inicio el programa
cargoAlumnosYNotas(alumnos, nota1, nota2, nota3, cantidadAlumnos);

let alumnoBuscado: string = rls.question("Ingrese el alumno de quien quiere concer el promedio: ");
while ((indice < cantidadAlumnos) && !encontrado) {
    if (alumnos[indice] == alumnoBuscado) {
        encontrado = true;
        promedioBuscado = (nota1[indice] + nota2[indice] + nota3[indice]) / 3
    }
    indice = indice + 1;
}
console.log("El promedio de: ", alumnoBuscado, " es de: ", promedioBuscado);
//pasar el while de buscar alumno a una funcion 