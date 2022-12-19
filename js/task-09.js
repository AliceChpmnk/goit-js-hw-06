"use strict";

const changeColorBtnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtnEl.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorNameEl.textContent = newColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}