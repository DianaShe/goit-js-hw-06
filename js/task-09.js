const colorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener('click', onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor () {
  colorEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}