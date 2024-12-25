const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
// const testmail = "testuser@gmail.com";
// const testpassword = "123456789";

showSignup.addEventListener('click', (e) => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

showLogin.addEventListener('click', (e) => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});
// document.getElementById('login-form').addEventListener('submit', function(event){
// let email = document.getElementById('login-email');
// let password = document.getElementById('login-password');
// if (email === testemail && password === testpassword) {
//   // If credentials match, redirect to the homepage
//   window.location.href = 'Main\Html files\index.html';  // Replace 'home.html' with your actual homepage URL
// } else {
//   alert('Email or Password is not correct');
// }
// });