// category.js

document.addEventListener("DOMContentLoaded", function () {
    // Example: Smooth scroll to a section
    const scrollToTopButton = document.getElementById('scrollToTop');

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Example: Tooltip activation on category cards
    const categoryCards = document.querySelectorAll('.card');

    categoryCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = 'scale(1)';
        });
    });
});
