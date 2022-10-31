const refs = {
    inputRef: document.querySelector(`#name-input`),
    nameRef: document.querySelector(`#name-output`),
};

const { inputRef, nameRef } = refs;
const onChangeNameInput = event => (nameRef.textContent = event.currentTarget.value);
inputRef.addEventListener(`input`, onChangeNameInput);