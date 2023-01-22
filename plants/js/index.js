const header_burger = document.querySelector('.burger');
const burger_menu = document.querySelector('.burger_menu');
const body = document.body;

function burgerS (s) {
    s.preventDefault();
    header_burger.classList.toggle('active');
    burger_menu.classList.toggle('burger_menu_open');
    body.classList.toggle('noscroll');
}

header_burger.addEventListener('click', burgerS);

function closeOnClick() {
    header_burger.classList.remove('acrive');
    burger_menu.classList.remove('burger_menu_open');
    body.classList.remove('noscroll');
}