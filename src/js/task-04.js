const refs = {
    valueRef: document.querySelector(`#value`),
    buttonDecrementRef: document.querySelector(`button[data-action="decrement"]`),
    buttonIncrementRef: document.querySelector(`button[data-action="increment"]`),
};
const { valueRef, buttonDecrementRef, buttonIncrementRef } = refs;
let counterValue = 0;

const onDecrementButtonClick = () => {
    valueRef.textContent = counterValue -= 1;
};

const onIncrementButtonClick = () => {
    valueRef.textContent = counterValue += 1;
};

buttonDecrementRef.addEventListener(`click`, onDecrementButtonClick);
buttonIncrementRef.addEventListener(`click`, onIncrementButtonClick);

