const refs = {
    formRef: document.querySelector(`.login-form`),
};

const { formRef } = refs;


const onFormSubmit = event => {
    event.preventDefault();

    const {
        currentTarget: {
            elements: {
                email: { value: emailValue },
                password: { value: passwordValue },
            },
        },
    } = event;

if (emailValue === `` || passwordValue === ``) {
    return alert(`There aren't all fields filled. Fill all fields please!`);
}
console.log({ email: `${emailValue}`, password: `${passwordValue}` });
    event.currentTarget.reset();
};
formRef.addEventListener(`submit`, onFormSubmit);