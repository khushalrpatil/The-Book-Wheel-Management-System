// Scroll to Top Button
window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById("scrollToTopBtn");
    
    // Show the button after 100px of scrolling
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Scroll the page to top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adding the Scroll to Top button dynamically
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.createElement("button");
    scrollToTopButton.innerHTML = "↑";
    scrollToTopButton.id = "scrollToTopBtn";
    scrollToTopButton.classList.add("btn", "btn-dark", "scroll-to-top-btn");
    scrollToTopButton.style.display = "none";  // Initially hidden
    scrollToTopButton.addEventListener("click", scrollToTop);
    
    document.body.appendChild(scrollToTopButton);
});
