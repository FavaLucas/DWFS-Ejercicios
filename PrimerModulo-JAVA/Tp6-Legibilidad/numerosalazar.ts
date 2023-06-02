import * as rls from 'readline-sync';

function generoNumeroAzar() {
    let numeroRandom = Math.random() * 100;
    return Math.round(numeroRandom)
}

let valores: number[] = new Array(10);

for (let i: number = 0; i < valores.length; i++) {
    valores[i] = generoNumeroAzar();
}
console.log(valores);
