"use strict";

const formEl = document.querySelector(".login-form");
const emailInput = document.getElementsByName("email");
const passwordInput = document.getElementsByName("password");

const createUser = elements => ({
    email: elements[0].value,
    password: elements[1].value,
});

formEl.addEventListener('submit', event => {
    event.preventDefault();

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("All fields must be filled!")
    } else {
        console.log(createUser(formEl.elements));
    }
});