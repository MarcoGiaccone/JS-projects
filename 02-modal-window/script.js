'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const buttons = document.querySelectorAll('.show-modal');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
});

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})



