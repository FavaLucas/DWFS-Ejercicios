import * as rls from "readline-sync";

let alumno: string = rls.question("Ingrese el nombre del alumno, (si termino presione enter): "); 
let notaPractica: number = 0;
let notaProblemas: number = 0;
let notaTeoria: number = 0;
let notaFinal: number = 0;

while (alumno != ""){
    notaPractica = rls.questionInt("Ingrese la nota de practica: ");
    notaProblemas = rls.questionInt("Ingrese la nota de problemas: ");
    notaTeoria = rls.questionInt("Ingrese la nota de teoria: ");
    if ((0 <= notaPractica && notaPractica <= 10) && (0 <= notaProblemas && notaProblemas<= 10) && (0 <= notaTeoria && notaTeoria<= 10)){
        notaFinal = (notaPractica*0.10)+(notaProblemas*0.50)+(notaTeoria*0.40);
        console.log ("La calificacion final es: ",notaFinal);
        alumno = rls.question("Ingrese un nuevo alumno, (si termino presione enter): ");
    }else{
       console.log("Una o mas notas ingresadas no corresponden, ingreselas nuevamente el alumno o pase al siguiente");
       alumno = rls.question("Ingrese alumno, (si termino presione enter): ");
    }
console.log("Ha finalizado su carga, hasta la proxima");
}