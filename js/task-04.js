"use strict";
let counterValue = 0;
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const interfaceValue = document.getElementById('value');

const onIncrementBtnEl = event => {
    counterValue += 1;
    interfaceValue.textContent = counterValue;
}

const onDecrementBtnEl = event => {
    counterValue -= 1;
    interfaceValue.textContent = counterValue;
}

incrementBtnEl.addEventListener('click', onIncrementBtnEl);
decrementBtnEl.addEventListener('click', onDecrementBtnEl);