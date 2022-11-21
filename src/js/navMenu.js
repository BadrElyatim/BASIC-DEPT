const menu = document.querySelector('.header__nav__menu')
const nav = document.querySelector('header nav')
const navClose = document.querySelector('.nav__close')

menu.addEventListener('click', () => {
    nav.style.display = "block"
})

navClose.addEventListener('click', () => {
    nav.style.display = "none"
})