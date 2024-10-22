/*This is the file with the code and programming part of the website: like the movements*/

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("[data-navbar]");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {
        navbar.classList.toggle("active"); // Alterna la clase 'active' para mostrar u ocultar el menú
    });
});
