import * as rls from 'readline-sync';

let palabra: string = rls.question("Ingrese la palabra a codificar: ");

function convertirEnClave(palabra: string): string {
    let vocales: string = "aeiou";
    let signos: string = ".,;:!";
    let matematicos: string = "01234567890+-*/";
    let clave: string = "";
    for (let i: number = 0; i < palabra.length; i++) {
        if (matematicos.indexOf(palabra[i] >= 0)) {
            clave = clave + palabra[i];
        } else {
            if (vocales.indexOf(palabra[i] >= 0)) {
                clave = clave + signos[vocales.indexOf(palabra[i])];
            } else {
                if (palabra[i] == palabra[i].toUpperCase())
                    clave = clave + palabra[i].toLowerCase;
                else
                    clave = clave + palabra[i].toUpperCase();
            }
        }
    }return clave;
    
}

convertirEnClave(palabra)