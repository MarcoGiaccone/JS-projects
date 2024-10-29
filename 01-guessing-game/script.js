'use strict';

//generating random number
let secretNumber = Math.floor(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

//setting the initial scores
let score = 20;
let highScore = 0;

//binding the score to the dom
document.querySelector('.score').textContent = score;

//setting the highscore variable
let highscoreNode = document.querySelector('.highscore');

//--------------------GAME LOGIC------------------------------------------
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);   //casting 
    const message = document.querySelector('.message');

    //case: no number inserted
    if (!guess) {
        message.textContent = 'Insert a number first!';

    } else if (guess < 1 || guess > 20) {   //case: number is not between 1 and 20
        message.textContent = 'Insert a number between 1 and 20';

    } else if (guess === secretNumber) {    //case: correct guess
        message.textContent = 'Correct guess!!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            highscoreNode.textContent = highScore;
        }

    } else if (guess > secretNumber) {      //case:number too high
        if (score > 1) {
            message.textContent = 'Guess is too high!!';
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            message.textContent = 'You lost the game!';
            score--;
            document.querySelector('.score').textContent = score;

        }
    } else if (guess < secretNumber) {      //case: number too low
        if (score > 1) {
            message.textContent = 'Guess is too low!!';
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            message.textContent = 'You lost the game!';
            score--;
            document.querySelector('.score').textContent = score;

        }
    } else { }
});

//----------------------RESET BUTTON------------------------------------

const resetButton = document.querySelector('.again');

resetButton.addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
})
