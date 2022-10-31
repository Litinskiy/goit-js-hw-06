const refs = {
    inputRef: document.querySelector(`#font-size-control`),
    textRef: document.querySelector(`#text`),
};

const { inputRef, textRef } = refs;

const onChangesSizeInput = event => {
    const inputValue = event.currentTarget.value;
    textRef.style.fontSize = `${inputValue}px`;
};
inputRef.addEventListener(`input`, onChangesSizeInput);