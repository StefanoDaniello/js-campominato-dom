/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/



let game = false
const button =document.querySelector('.btn').addEventListener('click' , function (){
    const numberOfCell = parseInt(document.getElementById('mySelect').value)
    console.log(numberOfCell)
    newGame(numberOfCell);
    game=true
})


function newGame(numberOfSquares){
    const stContainer =document.querySelector('.st-container');
    stContainer.innerHTML='';


    let bombs=[]
    for(let i=0 ; i<16 ; i++){
        let randomNum = generateUniqueRandomNumber(1,numberOfSquares,bombs);
        bombs.push(randomNum);
        console.log(bombs)
    }

    for(let i=0 ; i<numberOfSquares; i++){

    const square =document.createElement('div') ;

    if (numberOfSquares === 81){
        square.classList.add('box','medium')      
    }else if(numberOfSquares === 49){
        square.classList.add('box','hard')
    }else{
        square.classList.add('box')
    }

    square.addEventListener('click' , function (){
        let s=0
      
        console.log(s)
        if(game === true){
            if(bombs.includes(i+1)){
                square.classList.add('bglose')
                game=false
                document.getElementById('conteggi').innerHTML = `Hai perso il tuo punteggio è:${s}`;
            }else{
                square.classList.add('bgwin')
                s++
                document.getElementById('conteggi').innerHTML = `il tuo punteggio è ${s}`;
            }
        }
       
    })
    

   const spanContent = document.createElement('span');
   spanContent.append(i + 1);
   

   square.appendChild(spanContent);
   stContainer.appendChild(square);
   
}
}
function contatore(){
	
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateUniqueRandomNumber(min,max,blacklist){
    let isFound =false;
    let randomNumber;

    while(!isFound
        //is not true si può scrivere anche === false
        ){
        randomNumber=getRndInteger(min,max); 
        if(!blacklist.includes(randomNumber)
         //is not true si può scrivere anche === false
        ){
            isFound = true
        }
    }
    return randomNumber;
}