/* Chiedi all’utente il suo nome, 
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito 
ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: 
nomecognomecolorepreferito23  */ 


const userName = prompt('type your name');
console.log(userName);

document.getElementById('name').innerHTML = userName;

const userSurname = prompt('type your surname');
console.log(userSurname);

document.getElementById('surname').innerHTML = userSurname;