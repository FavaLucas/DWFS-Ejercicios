import * as rls from "readline-sync";

let precio: number = rls.questionInt ("Ingrese el precio del articlo que desea comprar: ");
let cantidad: number = rls.questionInt("Ingrese cantidad de articulos que desea comprar: ");
let precioTotal: number = precio * cantidad;
let precioConDescuento: number = precioTotal*0.85;
let mes: string = rls.question("Ingrese el mes en que realiza la compra: ");

if (mes == "Octubre"){
    console.log("Por comprar en Octubre obtiene un 15% de descuento y el valor a abonar sera;", precioConDescuento);
}else{
    console.log("Su compra no tiene descuento, el valor es: " ,precioTotal );
}
