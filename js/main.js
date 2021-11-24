const eyeButton = document.querySelector('.fa-eye');
const checkCircle = document.querySelector('.fa-check-circle');
const user = document.querySelector('.fa-user');
const erroCircle = document.querySelector('.fa-times-circle');

const button = document.querySelector('[data-js="button"]');

let labelName = document.querySelector('[data-js="labelName"]');
const username = document.querySelector('[data-js="username"]');

let labelEmail = document.querySelector('[data-js="labelEmail"]');
const email = document.querySelector('[data-js="email"]');

let labelPassword = document.querySelector('[data-js="labelPassword"]');
const password = document.querySelector('[data-js="password"]');

username.addEventListener('keyup', () => {
  if (username.value.length <= 2 || username.value.length >= 16) {
    user.setAttribute('style', 'display: none');
    erroCircle.setAttribute('style', 'display: block');
    checkCircle.setAttribute('style', 'display: none');
    username.setAttribute('style', 'border-color: red');
  } else {
    user.setAttribute('style', 'display: none');
    checkCircle.setAttribute('style', 'display: block');
    erroCircle.setAttribute('style', 'display: none');
    username.setAttribute('style', 'border-color: green');
  }
});

const registerLogin = event => {
  console.log('Clicked button');
}

button.addEventListener('click', registerLogin);

eyeButton.addEventListener('click', () => {
  const inputPassword = document.querySelector('[data-js="password"]');

  if (inputPassword.getAttribute('type') === 'password') {
    inputPassword.setAttribute('type', 'text');
  } else {
    inputPassword.setAttribute('type', 'password');
  }
});

