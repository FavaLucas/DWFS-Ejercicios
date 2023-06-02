import * as rls from "readline-sync";

/*
Hacer un programa para jugar piedra papel o tijera contra la PC
-- El programa elige aleatoriamente un opcion
-- El programa le pide al usuario que ingrese por consola
-- Se muestra por consola si gano la PC o gano el usuario
*/

let vectorJuego: string[] = new Array(3);
vectorJuego[0] = "Piedra";
vectorJuego[1] = "Papel";
vectorJuego[2] = "Tijera";

let eleccionUsuario: string = rls.question("Ingrese la opcion que quiera jugar: Piedra, Papel o Tijera: ");

//Selecciono un indice al azar que utilizo para reordenar luego mi arreglo
function generarIndiceAlAzar(dimension: number): number {
    let indiceJuego: number = Math.random() * dimension;
    indiceJuego = Math.floor(indiceJuego);
    return indiceJuego;
}

//Funcion para desordenar el arreglo de forma aleatoria
function desordenarArreglo(arreglo: string[]): string[] {
    for (let i: number = 0; i < arreglo.length; i++) {
        let auxLetra: string = "";
        let indiceJuego: number = generarIndiceAlAzar(arreglo.length);
        auxLetra = arreglo[i]
        arreglo[i] = arreglo[indiceJuego];
        arreglo[indiceJuego] = auxLetra;
    }
    return arreglo;
}

(desordenarArreglo(vectorJuego))

let seleccionPC: string = vectorJuego[generarIndiceAlAzar(vectorJuego.length)];
console.log("La eleccion de la PC es", seleccionPC);

if (eleccionUsuario == seleccionPC) {
    console.log("Empate");
    } else {
    switch eleccionUsuario
        
}


