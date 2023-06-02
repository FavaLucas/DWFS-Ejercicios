import * as rls from "readline-sync";

let valor: number = rls.questionInt("Ingrese el valor del Articulo que comprara: ");
let cantidad: number = rls.questionInt("Ingrese la cantidad de Articulos que comprara :");
let precioTotal: number = valor * cantidad; 
//descuento solo se utilizara si precioTotal > a 1000
let descuento: number = 0;
let precioTotalConDescuento: number = 0;

if (precioTotal >= 1000){
    descuento = (precioTotal*10)/100;
    precioTotalConDescuento = precioTotal - descuento;
    console.log("Por haber gastado mas de 1000 en su compra tiene un 10% de Descuento");
    console.log("El valor a pagar es de:", precioTotalConDescuento);
}else{
    console.log("El monto a pagar es de: ", precioTotal);
}
