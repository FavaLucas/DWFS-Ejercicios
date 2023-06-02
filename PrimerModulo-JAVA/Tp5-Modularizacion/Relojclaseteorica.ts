import * as rls from "readline-sync";

//escribo el pseudocodigo de mi reloj

const esperarMilisegundos = (milisegundos: number) = > {
    let esperar : boolean = true;
    setTimeout)()=> {
        esperar = false;
    }, milisegundos);
    while (esperar){
        esperar = esperar;
    }
}

//Variables
let H, M, S = 0;
// programa
while (true) {
    imprimir(H, M, S);
    S = S + 1
    if (S == 60) {
        S = 0;
        M = M + 1;
        if (M == 60) {
            M = 0;
            H = H + 1;
            if (H == 24){
                H = 0;
                esperar (1 seg)
            }else{
                esperar(1 seg);
        }else{
        esperar(1 seg);
    } else {
      esperar (1 seg);  
    }
}
}
}
