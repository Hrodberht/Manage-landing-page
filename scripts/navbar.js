const navBtn = document.getElementById('navbar__btn');
const hamburger = document.getElementById('navbar__hamburger');
const cross = document.getElementById('navbar__close');
const nav = document.getElementById('nav');

const NAV_CLASSES = {
    HIDDEN: 'hidden'
};

function controlNav () {
    nav.classList.toggle(NAV_CLASSES.HIDDEN);
    hamburger.classList.toggle(NAV_CLASSES.HIDDEN);
    cross.classList.toggle(NAV_CLASSES.HIDDEN);
}

navBtn.addEventListener('click', controlNav);