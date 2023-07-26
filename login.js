const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-popup');
const iconClose = document.querySelector('.icon-close');
const emailInputs = document.querySelectorAll('input[type="email"]');
const btnUser = document.querySelector('.btn-user');
const btnVendor = document.querySelector('.btn-vendor');
const registrationForm = document.querySelector('.form-box.register');


/*Ativa(direciona para o cadastro) ao apertar em cadastro */
registerLink.addEventListener('click', (event) => {
    event.preventDefault();
    wrapper.classList.add('active');
});

/*remove(volta ao login) ao apertar em login */
loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    wrapper.classList.remove('active');
});

/*Ao clicar no botão de login ativa a tela de login*/
btnPopup.addEventListener('click', (event) => {
    event.preventDefault();
    wrapper.classList.add('active-popup');
});

/*Ao clicar no X na tela de login ele fecha*/
iconClose.addEventListener('click', (event) => {
    event.preventDefault();/*evitar erros href=# */
    wrapper.classList.remove('active-popup');
});


function handleInputChange(event) {
    const inputBox = event.target.closest('.input-box');
    if (event.target.value.trim() !== '') {
        inputBox.classList.add('active');
    } else {
        inputBox.classList.remove('active');
    }
}

function showLoginPopup() {
    wrapper.classList.add('active-popup');
}
document.addEventListener('DOMContentLoaded', showLoginPopup);

emailInputs.forEach(input => {
    input.addEventListener('input', handleInputChange);
});



btnUser.addEventListener('click', () => toggleRegistrationMode('user'));
btnVendor.addEventListener('click', () => toggleRegistrationMode('vendor'));

function toggleRegistrationMode(mode) {
    const vendorFields = document.querySelector('.vendor-fields');
    if (mode === 'user') {
        btnUser.classList.add('active');
        btnVendor.classList.remove('active');
        vendorFields.style.display = 'none';
    } else if (mode === 'vendor') {
        btnUser.classList.remove('active');
        btnVendor.classList.add('active');
        vendorFields.style.display = 'block';
    }
}

registerLink.addEventListener('click', (event) => {
    event.preventDefault();
    wrapper.classList.add('active');
});







