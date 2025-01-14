document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const email = document.getElementById('email').value.trim();

        if (!email) {
            alert('Email is required.');
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
