// Il software deve chiedere per 10 volte all’utente di inserire un numero.

let somma = 0;

for( let i=0 ; i < 10 ; i++){
   let numero = Number(prompt("inserisci un numero"));
   somma += numero;
}

//  Il programma stampa la somma di tutti i numeri inseriti.
console.log("la somma è ", somma)