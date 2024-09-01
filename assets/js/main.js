document.addEventListener('DOMContentLoaded', () => {
    mobileMenu();
    projectSlider();
})

function projectSlider() {
    let swiperContainer = '.swiper-projects';
    let swiperOptions = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function mobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar');

    menuBtn.addEventListener('click', (e) => {
        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
        } else {
            menuBtn.classList.add('active');
        }
        
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        }
    });
}