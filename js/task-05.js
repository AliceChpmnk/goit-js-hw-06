"use strict";

const userNameinputEl = document.getElementById("name-input");
const userNameOutputEl = document.getElementById("name-output");

userNameinputEl.addEventListener('input', () => {
    if (userNameinputEl.value === '') {
        userNameOutputEl.textContent = "Anonymous";
    } else {
        userNameOutputEl.textContent = userNameinputEl.value;
    }
});
