document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("[data-navbar] .navbar-list");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {
        navbar.classList.toggle("active"); // Alterna la clase 'active'
    });
});
