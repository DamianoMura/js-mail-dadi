//  MAILS

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
//dichiaro una variabile di supporto booleana e della stringa di output
let permission=false;
let permissionOutput="";

//utilizziamo il for per andare a confrontare l'input con ogni posizione dell'array mails , e in caso sia uguale (condizione per poter accedere) darò il permesso e in caso contrario no
// debug : console.log(mails.length) 
for(let x=0 ; x<mails.length ; x++){
  //faccio un confronto diretto e metto in permission il risultato booleano  dell'espressione di uguaglianza
permission= userMail == mails[x];
//controlliamo se è vera, perchè in quel caso bisogna interrompere il for forzando l'indice ad andare a fine ciclo (come da dichiarazione, se vogliamo farlo andare finche non è minore di mails.length) quindi x=mails.length 
//console.log(userMail == mails[x])                           //debug
//console.log("permission "+permission)                                     //debug
if (permission==true){
  x=mails.length; 
  permissionOutput="complimenti  "+ userMail +", Hai il permesso per accedere" 
}  
else{
  permissionOutput="Siamo Spiacenti  "+ userMail +", Non hai il permesso per accedere"
} 
}

alert(""+permissionOutput+"");

//DADI
//variabili
let playerNum;  //numero generato per il giocatore 
let comNum; //numero generato per il computer
let rounds; //decidiamo noi il numero di round
let playerScore=0; //punteggio del giocatore
let comScore=0; //punteggio del computer
let message="";
rounds=parseInt(prompt("inserisci il numero di round"));
//console.log(parseInt(rounds));  //debug
//facciamo un for loop che dura quanto il numero di round e mi consente di 
for(let x=0 ; x<rounds ; x++){
alert("Tira i Dadi");
playerNum=Math.floor(Math.random()*6)+1;
comNum=Math.floor(Math.random()*6)+1;
if(playerNum==comNum) {
  message="Round "+ parseInt(x+1) +" [player: "+ playerNum +":"+ comNum + "computer] \n Patta";
}
else if(playerNum>comNum){
  message="Round "+ parseInt(x+1) +" [player: "+ playerNum +":"+ comNum + "computer] \n Hai Vinto";
  playerScore++;
}
else{
  message="Round "+ parseInt(x+1) +" [player: "+ playerNum +":"+ comNum + "computer] \n Hai Perso";
  comScore++;
}
alert("Round "+ parseInt(x+1))
alert(message);

if(x==rounds-1){
  if(playerScore==comScore) {
    rounds++;//aumentiamo il numero di round per evitare il pareggio
  }
  else if(playerScore>comScore){
    message="Hai Vinto la partita "+ playerScore + " a "+ comScore;
  }
  else{
    message="Hai Perso la partite "+ playerScore + " a "+ comScore;
  }
  alert(message);


  if (confirm("vuoi ri giocare?")) {
    message = "Preparati a un'altra partita!";
    x=0;
    playerScore=0;
    comScore=0;
  } else {
    message = "!";
  }
  alert(message);
}
}

