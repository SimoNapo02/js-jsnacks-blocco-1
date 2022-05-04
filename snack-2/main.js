// Il software stampa prima la parola più corta, poi la parola più lunga

// Chiedo all'user la prima parola
const ParolaUno = prompt("inserisci la prima parola");
// Chiedo all'user la seconda parola
const ParolaDue = prompt("inserisci la seconda parola");

// stampo la parola piu corta
if(ParolaUno.length > ParolaDue.length){
    console.log(ParolaUno);
 }
//  stampo la parola piu lunga
 else{
    console.log(ParolaDue)
 }
