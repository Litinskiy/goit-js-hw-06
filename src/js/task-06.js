const refs = {
    inputRef: document.querySelector(`#validation-input`),
};

const { inputRef } = refs;

const onChangeBorderInput = event => {
    if (event.currentTarget.value.length >= inputRef.dataset.length) {
        inputRef.classList.remove(`invalid`);
        inputRef.classList.add(`valid`);
    }
    else {
        inputRef.classList.add(`invalid`);
    }
    
};
inputRef.addEventListener(`blur`, onChangeBorderInput);