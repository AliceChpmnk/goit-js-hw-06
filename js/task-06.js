"use strict";

const inputEl = document.getElementById('validation-input');
const setLength = Number.parseInt(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === setLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }
    else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
})