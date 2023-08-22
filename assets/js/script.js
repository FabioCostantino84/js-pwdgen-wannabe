/* Chiedi all’utente il suo nome, 
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito 
ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: 
nomecognomecolorepreferito23  */ 


const userName = prompt('type your name');

const userSurname = prompt('type your surname');

const userFavoriteColour = prompt('type your favorite colour');

console.log(userName+userSurname+userFavoriteColour+'23');

document.getElementById('password').innerHTML = userName+userSurname+userFavoriteColour+'23';