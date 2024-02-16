function toggleMenu () {
    const navToggle = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav__list');
    navToggle.classList.toggle("open")
    navLinks.classList.toggle("open")
}