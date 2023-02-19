const counterEl = document.querySelector("#value");
const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0

const decrement = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

decrButton.addEventListener("click", decrement);
incrButton.addEventListener("click", increment);