const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');

inputEl.addEventListener('input', onInputChange);
createBtn.addEventListener('click', onCreateBtn);
destroyBtn.addEventListener('click', onDestroyBtn);

let value = 0;

function onInputChange(event) {
  value = event.currentTarget.value;
}

function onCreateBtn(event) {
  createBoxes(value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 20;
  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxes.push(boxEl);
  }
  
  boxesContainer.append(...boxes);
};


function onDestroyBtn(event) {
  boxesContainer.innerHTML = '';
  inputEl.value = 0;
}
