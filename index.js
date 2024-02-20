const navToggle = document.querySelector(`.nav-toggle`)
const navLink = document.querySelectorAll(`.nav__link`)

navToggle.addEventListener(`click`, () => {
    document.body.classList.toggle(`nav-open`);
});

//just to avoid the mistake of clicking it or activating it if it's off screen.
navLink.forEach(link => {       
    link.addEventListener(`click`, () => {
        document.body/classList.remove(`nav-open`);
    })
})