import * as rls from "readline-sync";

let palabra: string = rls.question("Ingrese palabra: ");

let inverso: string = "";
for (let i = palabra.length - 1; i >= 0; i--){
    inverso+= palabra[i];
}

console.log(inverso);