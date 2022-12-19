"use strict";

const inputSizeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputSizeEl.addEventListener('input', () => {
    textEl.style.fontSize = `${inputSizeEl.value}px`;
})