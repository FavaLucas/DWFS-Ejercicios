import * as rls from "readline-sync";
let textoUsuario: string = rls.question("Ingrese el texto que quiera convertir en CC: ");
let textoUsuarioSinEspacios: string = "";

//Funcion que quita los espacios a una cadena de caracteres
function quitarEspacios(textoUsuario: string): string {
    return textoUsuario.split(" ").join("");
}
/* A medida que recorra mi cadena de string la funcion evaluara posicion a posicion si encontre un espacio.
si lo encontre lo voy a quitar de mi caderay pondre la variable espacio en True,
a posterior del espacio y con la variable en true, lo que hago es la siguiente letra ponerla en Mayuscula 
Siempre que no encuentre espacios, todas las letras las pasare a minuscula
*/
function textoCamelCase(textoUsuario: string): string {
    let textoCC: string = "";
    let espacio: boolean = false;
    for (let i: number = 0; i < textoUsuario.trim().length; i++) {
        if (textoUsuario[i] == " ") {
            espacio = true;
        } else {
            if (espacio) {
                textoCC += textoUsuario[i].toUpperCase();
                espacio = false;
            } else {
                textoCC += textoUsuario[i].toLowerCase();
            }
        }
    } return textoCC;
}
//Inicio mi programa
textoUsuarioSinEspacios = textoCamelCase(textoUsuario);
console.log("El texto ingresado en formato CC es: ", textoUsuarioSinEspacios);