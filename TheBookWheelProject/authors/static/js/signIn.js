// sign.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    
    // Add form submission listener
    form.addEventListener('submit', function (event) {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('Both email and password are required.');
            event.preventDefault(); // Prevent form submission if fields are empty
        }

        // Example CAPTCHA validation logic (you can integrate a backend check here)
        const captcha = document.querySelector('.captcha-input');
        if (captcha && !captcha.value) {
            alert('Please solve the CAPTCHA.');
            event.preventDefault();
        }
    });
});
