"use strict";

const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length < 6) {
        inputEl.classList.add("invalid");
    }
    else {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
})