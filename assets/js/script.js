/* Chiedi all’utente il suo nome, 
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito 
ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: 
nomecognomecolorepreferito23

Dopo aver raccolto tutti i dettagli dell’utente, 
chiedete anche un ulteriore valore numerico 
- pensiamolo come una “chiave”.
Questa “chiave” dovrà essere sommata, 
con le giuste operazioni nel codice, al numero 23 
(o qualsiasi numero che avete utilizzato nella password).*/ 


const userName = prompt('type your name');

const userSurname = prompt('type your surname');

const userFavoriteColour = prompt('type your favorite colour');

const generatorRandomNumber = Math.floor((Math.random() * 100) +23);

console.log(userName+userSurname+userFavoriteColour+generatorRandomNumber);

document.getElementById('password').innerHTML = userName+userSurname+userFavoriteColour+generatorRandomNumber;

