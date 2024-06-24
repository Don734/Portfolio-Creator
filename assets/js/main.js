document.addEventListener('DOMContentLoaded', () => {
    projectSlider();
})

function projectSlider() {
    let swiperContainer = '.swiper-projects';
    let swiperOptions = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 20,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}