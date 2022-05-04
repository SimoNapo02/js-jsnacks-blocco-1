// Crea un array vuoto.
const numberList = [];
// Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
   const num = Number(prompt('Inserisci un numero'))
// se è dispari inseriscilo nell’array.
if(num%2===1){
   numberList.push(num) 
}  
}


console.log(numberList);