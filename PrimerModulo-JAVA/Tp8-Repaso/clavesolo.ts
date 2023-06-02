import * as rls from "readline-sync";

//Crear una funcion camel case para pasar las mayusculas a minusculas y viceversa 

let palabraClave: string = rls.question("Ingrese la palabra que quiera convertir en clave: ");
let password: string = "";


function convertirPalabraEnClave(palabra: string): string {
    let clave: string = "";
    let vocales: string = "aeiuo";
    let signos: string = ".,;:!";
    let numerosOperadores: string = "0123456789+-*/";
    for (let i: number = 0; i < palabra.length; i++) {
        //la funcion indexOf retorna el indice de la primera coincidencia, retorna -1 si el elemento buscado no esta
        //Si mi clave es 012Lucas, retorna un 0 ya que el numero 0 esta en la posicion 0 de mi string numOpard 
        //y al ser >= que 0 guardara en clave lo que haya en la posicion 0 de palabra
        if (numerosOperadores.indexOf(palabra[i]) >= 0) {
            clave += palabra[i];
        } else {
            if (vocales.indexOf(palabra[i]) >= 0) {
                //ver si esto funciona, sino cambiar aca
                clave += signos[vocales.indexOf(palabra[i])];
            } else {
                if (palabra[i] == palabra[i].toUpperCase())
                    clave += palabra[i].toLowerCase();
                else
                    clave += palabra[i].toUpperCase();
            }
        }
    }
    return clave;
}

console.log("La palabra ingresada es: ", palabraClave);
password = convertirPalabraEnClave(palabraClave);
console.log("La clave sera: ", password);




