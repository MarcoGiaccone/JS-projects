'use strict';

//-----------------Selezione di elementi frequenti--------------------
const main = document.querySelector('main');
const modal = document.querySelector('.modal');
let modalHeader = document.querySelector('.modal-header');

//score dei giocatori
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
let currentScore = 0;

//bottoni roll e hold
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');

//immagine del dado
const diceElement = document.querySelector('.dice');

//score correnti
const currentScore0Element = document.querySelector('#current--0');
const currentScore1Element = document.querySelector('#current--1');

//giocatore attivo
let activePlayer = 0;

//scores
let scores = [0, 0];

//---------------------FUNZIONI------------------------------
function switchPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : activePlayer = 0;
    const players = document.querySelectorAll('.player');
    players.forEach(function (player) {
        player.classList.toggle('player--active');
    })
    currentScore = 0;
}

function rollDice() {
    let diceValue = Math.floor(Math.random() * 6 + 1);  //rolla il dado

    diceElement.src = `dice-${diceValue}.png`;          //cambia l' immagine

    if (diceElement.classList.contains('hidden')) {     //se l immagine e' hidden
        diceElement.classList.remove('hidden');         //la rende visibile
    }

    if (diceValue != 1) {                               //se il dado non ha rollato 1 
        currentScore = currentScore + diceValue;        //aggiunge il valore allo score corrente
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;//fa vedere lo score corrente
    } else {                                            //se il dado ha rollato 1,
        if (activePlayer === 0) {                       //se il player attivo e' il p0
            currentScore0Element.textContent = '0';     //azzera il display del puntaggio corrente
            switchPlayer();                             //cambia giocatore
        } else {                                        //se il player attivo e' il p1
            currentScore1Element.textContent = '0';     //azzera il display del puntaggio corrente
            switchPlayer();                             //cambia giocatore       
        }
    }
}

function holdScore() {                                  //funzione hold
    if (activePlayer === 0) {                           //se il giocatore e' il p0
        scores[0] += currentScore;                      //aggiunge il current score all score totale
        score0Element.textContent = `${scores[0]}`;     //cambia il text content dell' elemento con il nuovo score
        currentScore0Element.textContent = '0';         //svuota il text content del current score
        switchPlayer();                                 //cambia giocatore
        if (scores[0] >= 30) {
            openModal(1);
            newGame();
        }
    } else {                                            //altrimenti
        scores[1] += currentScore;                      //fa la stessa cosa per il secondo giocatore
        score1Element.textContent = `${scores[1]}`;
        currentScore1Element.textContent = '0';
        switchPlayer();
        if (scores[1] >= 30) {
            openModal(2);
            newGame();
        }
    }
    console.log(scores);
}

function newGame() {
    scores = [0, 0];                                   //azzera i punteggi
    currentScore = 0;                                  //azzera il punteggio corrente
    document.getElementById('score--0').textContent = '0';//azzera il display
    document.getElementById('score--1').textContent = '0';//azzera il display
    currentScore0Element.textContent = '0';
    currentScore1Element.textContent = '0';
}

function closeModal(event) {
    if (event.key === 'Escape') {
        modal.classList.add('hidden');
    }
}

function openModal(playerNumber) {
    modal.classList.remove('hidden');
    modalHeader.textContent = `PLAYER ${playerNumber} WON!`;
}

//--------------------------MAIN------------------------------------
diceElement.classList.add('hidden');
rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', holdScore);
newGameButton.addEventListener('click', newGame);
document.addEventListener('keydown', closeModal);









