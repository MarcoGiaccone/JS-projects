'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const buttons = document.querySelectorAll('.show-modal');

function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

buttons.forEach(function (button) {
    button.addEventListener('click', showModal);
});

btnCloseModal.addEventListener('click', hideModal);



