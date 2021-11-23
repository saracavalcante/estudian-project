const eyeButton = document.querySelector('.fa-eye');

eyeButton.addEventListener('click', () => {
  const inputPassword = document.querySelector('[data-js="password"]');

  if (inputPassword.getAttribute('type') === 'password') {
    inputPassword.setAttribute('type', 'text');
  } else {
    inputPassword.setAttribute('type', 'password');
  }
});