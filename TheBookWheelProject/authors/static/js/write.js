// write.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    
    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        // Basic client-side validation
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        
        if (!title || !content) {
            alert('Please fill in all fields before submitting.');
            event.preventDefault(); // Prevent form submission if fields are empty
        }
    });
    
    // Optional: Additional JS functions can be added here for more interactivity
});
