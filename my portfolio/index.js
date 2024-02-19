// Select the navigation toggle button
const navToggle = document.querySelector('.nav-toggle');
// Select all navigation links
const navLinks = document.querySelectorAll('.nav__link')
// Event listener for toggling the navigation menu
navToggle.addEventListener('click', () => {         // Toggle the 'nav-open' class on the body element to show/hide the navigation menu
    document.body.classList.toggle('nav-open');
});                                                 // Event listeners for each navigation link to close the navigation menu when a link is clicked

navLinks.forEach(link => {
    link.addEventListener('click', () => {          // Remove the 'nav-open' class from the body element to hide the navigation menu
        document.body.classList.remove('nav-open');
    })
})
