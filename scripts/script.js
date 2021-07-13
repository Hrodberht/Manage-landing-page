const emailFormat = /\S+@\S+\.\S+/;
const emailField = document.getElementById('email');
const emailError = document.getElementById('subscribe__error');
const button = document.getElementById('btn');

const CLASSES = {
    FORM_FIELD_ERROR: 'subscribe__email--error',
    HIDDEN: 'hidden'
};

function showError () {
    emailField.classList.add(CLASSES.FORM_FIELD_ERROR);
    emailError.classList.remove(CLASSES.HIDDEN);
}

function hideError () {
    emailField.classList.remove(CLASSES.FORM_FIELD_ERROR);
    emailError.classList.add(CLASSES.HIDDEN);
}

function validate () {
    let emailValue = email.value;

    if (emailValue.match(emailFormat)) {
        return true
    } else {
        showError();
    }

    window.setTimeout(hideError, 5000);
}

button.addEventListener('click', validate);