import * as rls from 'readline-sync';

let vector1 : number[] = new Array (6);
let vector2 : number[] = new Array (6);

let vectorsuma : number [] = new Array (6);

for (let i: number = 0; i < 6; i++){
    vector1[i] = rls.questionInt("Ingrese los valores del 1er vector: ");
}
for (let i: number = 0; i < 6; i++){
    vector2[i] = rls.questionInt("Ingrese los valores del 2do vector: ");
}
for (let i: number = 0; i < 6; i++){
    vectorsuma[i] = vector1[i] + vector2[i];
}

console.log(vectorsuma);