const refs = {
    inputRef: document.querySelector(`#name-input`),
    nameRef: document.querySelector(`#name-output`),
};

const { inputRef, nameRef } = refs;

const onChangeNameInput = ({ currentTarget: { value } }) => {
    nameRef.textContent = value.trim() || 'Anonymous';
};

inputRef.addEventListener(`input`, onChangeNameInput);