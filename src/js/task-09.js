const refs = {
  bodyRef: document.querySelector(`body`),
  buttonRef: document.querySelector(`.change-color`),
  colorTextRef: document.querySelector(`.color`),
}

const { buttonRef, bodyRef, colorTextRef } = refs;

const onChangeColorButton = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorTextRef.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16).padStart(6, 0)}`;
}

buttonRef.addEventListener(`click`, onChangeColorButton);