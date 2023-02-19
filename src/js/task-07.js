const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = '55px';

function onControllerChange (event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

input.addEventListener('input', onControllerChange);