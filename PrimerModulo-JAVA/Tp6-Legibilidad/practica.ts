let mensaje: string = "Soy Global";
ambitoVariables();
console.log(mensaje)

function ambitoVariables() {
    leeVariable();
    mensaje = "Hola Mundo!!";
}

function leeVariable() {
    console.log(mensaje);
}

/*
1 hacer una funcion que retorne los primeros 20 numeros naturales
2 vamos a recibir un parametro que significa hasta cuantos numeros vamos a sumar, hasta donde sumar (n numeros)

son 2 funciones distintas, una suma 20 numeros y la otra va a sumar N numeros
las dos funciones devuelven un resultado (usar return, no usar console)
no hay variables globales en este ejercicio

import * as rls from 'readline-sync';

sumaNaturales 
*/