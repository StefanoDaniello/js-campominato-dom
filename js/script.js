/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/




const button =document.querySelector('.btn').addEventListener('click' , function (){
    const numberOfCell = parseInt(document.getElementById('mySelect').value)
    console.log(numberOfCell)
    newGame(numberOfCell);
})


function newGame(numberOfSquares){
    const stContainer =document.querySelector('.st-container');
    stContainer.innerHTML='';

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
        square.classList.add('bgwin')
        console.log(i+1)
    })

   const spanContent = document.createElement('span');
   spanContent.append(i + 1);
   

   square.appendChild(spanContent);
   stContainer.appendChild(square);
   
}
}