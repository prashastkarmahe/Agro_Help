// Get the container element
const container = document.getElementById('container');

// Get the "Sign in" and "Sign up" buttons
const signInButton = document.querySelector('.sign-in button');
const signUpButton = document.querySelector('.sign-up button');

// Store sign-up credentials in an array of objects
let signupCredentials = [];

// Function to toggle between sign-in and sign-up views
const toggleForm = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

// Function to handle sign-up process
const signUp = () => {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if the username and password fields are not empty and if the passwords match
    if (username.trim() === '' || password.trim() === '' || password !== confirmPassword) {
        alert('Please enter valid credentials.');
        return;
    }

    // Check if the username is not already taken
    if (signupCredentials.some((cred) => cred.username === username)) {
        alert('Username already taken. Please choose a different one.');
        return;
    }

    // Add the new sign-up credentials to the array
    signupCredentials.push({ username, password });

    // Inform the user that sign-up was successful
    alert('Sign up successful! You can now sign in with your credentials.');
    toggleForm(); // Switch to the sign-in view after successful sign-up
};

// Function to handle sign-in process
const signIn = () => {
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;

    // Find the entered username in the stored credentials
    const foundCredential = signupCredentials.find((cred) => cred.username === username);

    if (!foundCredential || foundCredential.password !== password) {
        alert('Invalid credentials. Please try again.');
        return;
    }

    // Redirect to "index.html" when signing in
    window.location.href = 'index.html';
};

// Add click event listeners to the buttons
signInButton.addEventListener('click', signIn);
signUpButton.addEventListener('click', signUp);

// Add click event listener to the "Sign up here" link
const signInLink = document.getElementById('signInLink');
const signUpLink = document.querySelector('.sign-in b.pointer');
signInLink.addEventListener('click', toggleForm);
signUpLink.addEventListener('click', toggleForm);

// Set initial view after a delay
setTimeout(() => {
    container.classList.add('sign-in');
}, 200);
