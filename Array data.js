let formDataArray = [];
const form = document.getElementById('userForm');
const output = document.getElementById('output');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert("Please fill all the fields.");
        return;
    }

    const emailPattern = /@gmail/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const formData = {
        name: name,
        email: email,
        password: password
    };
    formDataArray.push(formData);
    output.textContent = JSON.stringify(formDataArray, null, 2);
    form.reset();

    // Reset password input type and icon after form reset
    passwordInput.type = 'password'; // Reset password input to hidden
    togglePassword.classList.remove('fa-eye'); // Remove fa-eye class
    togglePassword.classList.add('fa-eye-slash'); // Add fa-eye-slash class
    passwordVisible = false; // Reset visibility flag
    
});

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
let passwordVisible = false;
togglePassword.addEventListener('click', function () {
    passwordVisible = !passwordVisible;
    if (passwordVisible) {
        passwordInput.type = 'text'; // Show password
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password'; // Hide password
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    }
});
