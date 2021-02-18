

// Слайдер

// Смещение от левого края

const images = document.querySelectorAll('.slider__img');
const sliderFlex = document.querySelector('.slider-flex');

let count = 0; // Ссылается на активный слайдер
let width;

function init() {
    console.log('resize');
    console.log(width);
    console.log(document.documentElement.clientWidth);

    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth > 375 && screenWidth < 768) {

        document.querySelector('.slider__view').style.width = '46%';
        width = document.querySelector('.slider__view').offsetWidth;
        sliderFlex.style.width = width * images.length + 'px';

        images.forEach(item => {
            item.style.width = width + 'px';
        })
        sliderFlex.style.height = ((width / 100) * 116) + 'px';
        document.querySelector('.slider__view').style.height = 'auto';
    }
    if (screenWidth > 768 && screenWidth < 1600) {
        document.querySelector('.slider__view').style.width = '360px';
        width = document.querySelector('.slider__view').offsetWidth;
        sliderFlex.style.width = width * images.length + 'px';

        images.forEach(item => {
            item.style.width = width + 'px';
        })
        sliderFlex.style.height = ((width / 100) * 116) + 'px';
        document.querySelector('.slider__view').style.height = 'auto';
    }
    rollSlider();
}

window.addEventListener('resize', init);

init();

document.querySelector('.slider__prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider__next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    sliderFlex.style.transform = 'translate(-' + count * width + 'px)';
}






// let offset = 0;
// const sliderFlex = document.querySelector('.slider-flex');

// document.querySelector('.slider__next').addEventListener('click', function () {
//     offset = offset + 360;
//     if (offset >= 1080) {
//         offset = 0;
//     }
//     sliderFlex.style.left = -offset + 'px';
// });

// document.querySelector('.slider__prev').addEventListener('click', function () {
//     offset = offset - 360;
//     if (offset < 0) {
//         offset = 720;
//     }
//     sliderFlex.style.left = -offset + 'px';
// });