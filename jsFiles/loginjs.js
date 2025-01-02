const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');

});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

const users = [];

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = document.getElementById('signup-name').value;
  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;

  users.push({ name, email, password });

  alert('Signup successful! You can now login.');

  document.getElementById('signup-name').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';

  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

let testmail = 'email@gmail.com';
let testpassword = '241914';

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;

  const user = users.find(user => user.email === email && user.password === password);

  if ((email === testmail && password === testpassword) || user) {
    location.replace('index.html');
  } else {
    alert('Email or Password is not correct');
  }
});
