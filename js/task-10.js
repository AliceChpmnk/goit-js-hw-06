const boxesEl = document.getElementById("boxes");
const controlsEl = document.getElementById("controls");
const controlsInputEl = controlsEl.firstElementChild;
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

createBtnEl.addEventListener('click', () => {
  createBoxes(controlsInputEl.value);
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function createBoxes(amount) {
//   const boxes = [];
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = getRandomHexColor();

//     boxes.push(box);
//   }
  
//   boxesEl.append(...boxes); 
// }

//Виправила спосіб, в який задавала inline стилі, і почало працювати)
function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const currentColor = getRandomHexColor();
    boxes.push(`<div style = "width:${30 + i * 10}px; height:${30 + i * 10}px; background-color:${currentColor}"></div>`);
  }
  
  boxesEl.insertAdjacentHTML("beforeend", boxes.join("")); 
}


function destroyBoxes() {
  boxesEl.innerHTML = "";
}