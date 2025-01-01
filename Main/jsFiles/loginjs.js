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

// Signup function
document.getElementById('signup-form').querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('signup-name').value;
  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;

  // Store user data in the array
  users.push({ name, email, password });

  alert('Signup successful! You can now login.');

  // Clear the form fields
  document.getElementById('signup-name').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';

  // Switch to login form
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

const testmail = "testuser@gmail.com";
const testpassword = "123456789";

document.getElementById('login-form').querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;

  const user = users.find(user => user.email === email && user.password === password);

  if ((email === testmail && password === testpassword) || user) {
    window.location.href = 'Main/index.html';  // Use forward slashes for the file path
  } else {
    alert('Email or Password is not correct');
  }
});