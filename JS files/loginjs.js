const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

// Show Sign-Up Form
showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

// Show Login Form
showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});
