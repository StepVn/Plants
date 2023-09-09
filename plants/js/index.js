
const header_burger = document.querySelector('.burger');
const burger_menu = document.querySelector('.burger_menu');
const body = document.body;
const filter_button = document.querySelectorAll('.filter_clack')
const pictures = document.querySelector('.srvc-img')

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

document.querySelectorAll('.accordion-cleek').forEach((el) => {
    el.addEventListener('click', () => {
        let accordion_open_info = el.nextElementSibling;
        console.log(accordion_open_info);

        if(accordion_open_info.style.maxHeight) {
            document.querySelectorAll('.accordion_open_info').forEach((el) => el.style.maxHeight = null);
        } else {
            document.querySelectorAll('.accordion_open_info').forEach((el) => el.style.maxHeight = null);
            accordion_open_info.style.maxHeight = accordion_open_info.scrollHeight + 'px';
        }
    });
});

let accordion_city_info = function () {
    let accordionHeader = document.querySelectorAll('.accordion-city-cleek');
    let accordionItem = document.querySelectorAll('.accordion_item');

    accordionHeader.forEach(item => {
        item.addEventListener('click', accordion_city_infoToogle);
    });

    accordionItem.forEach(item => {
        item.addEventListener('click', accordionChoose);
    });

    function accordion_city_infoToogle() {
        this.parentElement.classList.toggle('is-active');
    }
    
    function accordionChoose () {
        let name = this.innerText;
            accordion = this.closest('.accordion_city_info'),
            accordionTitle = accordion.querySelector('.accordion_city_title');
        accordionTitle.innerText = name;
        accordion.classList.remove('is-active');
    }

};

accordion_city_info();

const serviceClack = document.querySelectorAll('.service-clack');
const garden = document.querySelectorAll('.garden');
const lawn = document.querySelectorAll('.lawn_care');
const planting = document.querySelectorAll('.planting');

serviceClack.forEach ((element) =>
    element.addEventListener('click', () => {
        element.classList.toggle('activno');
    })
);

const blur = (pict) => {
    pict.classList.toggle('blur');
};

serviceClack.forEach ((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('filter_gardens')) {
            lawn.forEach(blur);
            planting.forEach(blur);
        } else if (element.classList.contains('filter_lawn')) {
            garden.forEach(blur);
            planting.forEach(blur);
        } else if (element.classList.contains('filter_planting')) {
            garden.forEach(blur);
            lawn.forEach(blur);
        }
    });
});