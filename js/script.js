// iniziamo con le mail, creando un array contenente le mail di partenza
// e poi tramite prompt facciamo inserire all'utente la propria mail
//per poi andarla a cercare nell'array e stampare se si ha accesso o meno 

const mails= [
"nico@gmail.com",
"pagassasabe@tiscali.com",
"pasaghella@yahoo.com",
"simpo@gmail.com",
"gagnella@gmail.com",
"franco@gmail.com",
"cassacarragnu@gmail.com",
//ogni riferimento a nomi o persone è puramente casuale
];

// chiediamo all'utente di inserire la propria e-mail e dichiariamo anche la variabile userMail dove immagazzineremo l'input
const userMail = prompt("inserisci la tua mail");

//utilizziamo il for per andare a confrontare l'input con ogni posizione dell'array mails , e in caso sia uguale (condizione per poter accedere) darò il permesso e in caso contrario no
