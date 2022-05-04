
// Lista nomi
const nameList = ["Mario", "Giovanni", "Luigi", "Cristina", "Francesco"];
// lista cognomi
const surList = ["Rossi", "Napo", "Villa", "Rosa", "Verdi"];

// generatore di invitati
const randomName = Math.floor(Math.random() * nameList.length);
const randomlastNames = Math.floor(Math.random() * surList.length);


let fullName = (nameList[randomName]) + " " + (surList[randomlastNames]);
console.log(fullName);