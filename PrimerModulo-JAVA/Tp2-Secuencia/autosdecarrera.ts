import * as readlineSync from 'readline-sync';

// puedo poner import * as rls from 'readline-sync';
// y luego poner let vuelta1: number = rls.questionFloat ("Ingrese el tiempo de la Primer Vuelta: ");

let vuelta1: number = readlineSync.questionFloat ("Ingrese el tiempo de la Primer Vuelta: ");
let vuelta2: number = readlineSync.questionFloat ("Ingrese el tiempo de la Segunda Vuelta: ");
let vuelta3: number = readlineSync.questionFloat ("Ingrese el tiempo de la Tercera Vuelta: ");
let vuelta4: number = readlineSync.questionFloat ("Ingrese el tiempo de la Cuarta Vuelta: ");

/*como el dato que ingresa el usuario a nuestro programa no va a cambiar durante su ejecucion
podemos declarar constantes con const en lugar de variables con let */

//readlineSync.questionInt voy a poder cargar un numero entero
//readlineSync.questionFloat voy a poder cargar un numero decima

/*readlineSync.question voy a recibir un String, 
en ese caso despues de declarar el tipo number se usa la funcion Number, 
para pasar el sting a numero (con comas)*/

let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let tiempoPromedio: number = tiempoTotal/4;

console.log("El tiempo Total es de:", tiempoTotal);
console.log("El promedio de las vueltas es de: ", tiempoPromedio);
console.clear; 