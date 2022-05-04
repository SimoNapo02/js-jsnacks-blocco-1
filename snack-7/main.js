
// Lista nomi
const nameList = ["Mario", "Giovanni", "Luigi", "Cristina", "Francesco"];
// lista cognomi
const surList =prompt ["Rossi", "Napo", "Villa", "Rosa", "Verdi"];

// generatore di invitati
const randomName = Math.floor(Math.random() * names.length);
const randomlastNames = Math.floor(Math.random() * lastNames.length);


let fullName = (nameList[randomName]) + " " + (surList[randomlastNames]);
console.log(fullName);