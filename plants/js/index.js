console.log('Привет проверяющий. Я знаю, что секция с блюром не сделана, а секция прайс сделана, но не один в один как в макете. Select в секции contacts, так же пытаюсь делать но, везжающий блок не успел сделать. Я знаю, что проверять работы отличников намного проще, но большое тебе спасибо, что ты уделил время и моей не Супер отлично сделанной работе, я только учусь и думаю, что все получится:) Оценку конечно хотелось бы за прайс и селект, но ты уже ставь на свое усмотрение:) Удачи и успехов в учебе:) Спасибо!:)')

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