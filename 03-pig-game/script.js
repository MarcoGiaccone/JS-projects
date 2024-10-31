'use strict';

//-----------------Selezione di elementi frequenti--------------------

//score dei giocatori
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');

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
let activePlayer = Math.floor(Math.random() * 2);

//scores
const scores = [0, 0];

//---------------------FUNZIONI------------------------------

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
        if (activePlayer === 0) {
            currentScore0Element.textContent = '0';
            switchPlayer();
        } else {
            currentScore1Element.textContent = '0';
            switchPlayer();
        }
    }
}

function holdScore() {
    if (activePlayer === 0) {
        scores[0] += currentScore;
        score0Element.textContent = `${scores[0]}`;
        currentScore0Element.textContent = '0';
        switchPlayer();
    } else {
        scores[1] += currentScore;
        score1Element.textContent = `${scores[1]}`;
        currentScore1Element.textContent = '0';
        switchPlayer();
    }
}

function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
}

//--------------------------MAIN------------------------------------

let currentScore = 0;
diceElement.classList.add('hidden');
rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', holdScore);







