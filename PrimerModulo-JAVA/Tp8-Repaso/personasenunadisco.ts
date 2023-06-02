import * as rls from "readline-sync";

/*
1- Determinar la cantidad de personas de una misma edad en la Disco (contador)
2- No pueden ingresar menores de 18 ni mayores de 40
3- La carga de datos es aleatoria (18,40) (Funcion aleatoria)
4- Cantidad de personas 270

Objetivo: A - Cuantas personas son menores de 21 
          B - Cuantas personas son mayores o iguales a 21 
          C - Personas en total...270...

*/

//Funcion para generar un numero aleatorio entero entre un Minimo y un Maximo
function numeroAleatorioMaxMin(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//Funcion para cargar un arreglo posicion por posicion con un numero aleatorio entre 18 y 40
function cargarArregloAleatorio(arreglo: number[]): number[] {
    for (let i: number = 0; i < arreglo.length; i++) {
        arreglo[i] = numeroAleatorioMaxMin(18, 40);
    }
    return arreglo;
}

//Funcion busco menores de 18 y mayores = de 21
function buscarEnArreglo(arreglo: number[]) {
    let menores21: number = 0;
    //Inicializo mi contador de < de 21 años
    let mayoresIguales21: number = 0;
    //Inicializo mi contador de >= de 21 años
    for (let i: number = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 21) {
            menores21++;
        } else {
            mayoresIguales21++;
            //No necesito contar los MI21 
            //mayoresIguales21 = 270 - Menores21;
        }
    }
    console.log("Los menores de 21 son: ", menores21);
    console.log("Los mayores o iguales de 21 son: ", mayoresIguales21);
}

//Funcion para mostrar mi arreglo como una linea
function mostrarArreglo(arreglo: number[]) {
    let linea: string = "";
    for (let i: number = 0; i < arreglo.length; i++) {
        linea += ` ${arreglo[i]},`;
    }
    console.log(linea);
}


let disco: number[] = new Array(270);

//Inicio mi programa
cargarArregloAleatorio(disco);
console.log(disco);
buscarEnArreglo(disco);
mostrarArreglo(disco);