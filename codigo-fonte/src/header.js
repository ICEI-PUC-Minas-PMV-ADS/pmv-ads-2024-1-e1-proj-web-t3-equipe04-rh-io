const menuButton = document.querySelector('#menu');
const closeMenu = document.querySelector('.btn.close');
const menuAside = document.querySelector('.menu-side');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const toggleMenu = () => {
    menuAside.dataset.open = menuAside.dataset.open === "true" ? "false" : "true";
    overlay.dataset.open = overlay.dataset.open === "true" ? "false" : "true";
    body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
}

menuButton.addEventListener('click', () => {
    toggleMenu()
})
closeMenu.addEventListener('click', () => {
    toggleMenu()
})

overlay.addEventListener('click', () => {
    toggleMenu()
})