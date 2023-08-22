const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const dark = document.querySelector('.dark')
const showMenu = document.querySelector('.show-menu')

const openMenu = () => {
    menu.classList.add('hidden')
    close.classList.remove('hidden')
    showMenu.style.left="125px";
    dark.classList.remove('hidden')
}

const closeMenu = () => {
    menu.classList.remove('hidden')
    close.classList.add('hidden')
    showMenu.style.left="375px";
    dark.classList.add('hidden')
}


menu.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)