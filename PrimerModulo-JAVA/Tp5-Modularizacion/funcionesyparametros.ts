import * as rls from 'readline-sync'

let nombre :string = rls.question("Ingrese el nombre: ");

function imprimirNombre (i: string){
    console.log(i);
}

imprimirNombre(nombre);
imprimirNombre("Lucas");