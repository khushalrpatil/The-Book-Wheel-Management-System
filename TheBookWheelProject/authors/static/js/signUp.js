document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm_password').value.trim();

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
        }

        // CAPTCHA validation logic
        const captcha = document.querySelector('.captcha-input');
        if (captcha && !captcha.value) {
            alert('Please solve the CAPTCHA.');
            event.preventDefault();
        }
    });
});
