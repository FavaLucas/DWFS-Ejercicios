import * as rls from "readline-sync";

let palabra: string = rls.question("Ingrese una frase: ");
let resultado = " ";
palabra = palabra.trim();
let proxiMay: boolean = false;

/*
for (let index = 0; index < palabra.length; index++) {
    const letra = palabra[index];
    if (letra == " ") {
        proxiMay = true;
    } else {
        if (proxiMay) {
            resultado += letra.toUpperCase();
            proxiMay = false;
        } else {
            resultado += letra;
        }
    }
}
console.log(resultado);
*/

//Creo un arreglo separando por espacios
/*
let arrPalabras: string[] = palabra.split(" ");
console.log(arrPalabras);
let arrResultado: string[] = new Array(arrPalabras.length);
for (let index = 0; index < arrPalabras.length; index++){
    const palabra = arrPalabras[index];
    if (index > 0){
    arrResultado[index] = palabra[0].toUpperCase() + palabra.substring(1);
    }else{
        arrResultado[index] = palabra;
    }
}
console.log (arrResultado.join(" "));
*/

let arrPalabras: string[] = palabra.split(" ");
console.log(arrPalabras);
for (let index = 1; index < arrPalabras.length; index++){
    const palabra = arrPalabras[index];
    arrPalabras[index] = palabra[0].toUpperCase() + palabra.substring(1, palabra.length).toLowerCase();
}
console.log(arrPalabras.join());