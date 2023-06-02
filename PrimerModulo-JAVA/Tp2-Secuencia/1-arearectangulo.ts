import * as readlineSync from 'readline-sync';

let alturaRectangulo :number = Number(readlineSync.question("Ingrese la Altura del Rectangulo: ")); //aca el valor ingresado es un string y lo convierto en numero usando la funcion Number
// otra opcion es hacer asi: let alturaRectangulo :number = readlineSync.questionInt("Ingrese la Altura del Rectangulo: ");

let baseRectangulo :number = Number(readlineSync.question("Ingrese la Base del Rectangulo: "));
// otra opcion es hacer asi: let baseRectangulo :number = readlineSync.questionInt("Ingrese la Base del Rectangulo: ");

let areaDelRectangulo : number = alturaRectangulo * baseRectangulo;

console.log("Altura:", alturaRectangulo);
console.log ("El Area del Rectangulo es", areaDelRectangulo);