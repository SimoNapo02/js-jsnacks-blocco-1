// L’utente inserisce due numeri in successione, con due prompt.
const NumeroUno = Number(prompt("Inserisci il primo numero"));
const NumeroDue = Number(prompt("Inserisci il secondo numero"));

// Il software stampa il maggiore.
if (NumeroUno > NumeroDue) {
    console.log(NumeroUno);
} else if (NumeroUno < NumeroDue){
    console.log(NumeroDue);
} else {
    console.log("i numeri sono gli stessi");
}
