import * as rls from "readline-sync";

let palabra: string = rls.question("Ingrese una frase: ");
let resultado = " ";
palabra = palabra.trim();
let proxiMay: boolean = false;

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

