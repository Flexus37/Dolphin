'use strict'

document.addEventListener('DOMContentLoaded', () => {

    function previewSlider(wrapperClass, itemClass, btnPrevClass, btnNextClass, slidesData) {
        const wrapper = document.querySelector(wrapperClass);
        const inner = wrapper.querySelector('div');
        const item = document.querySelectorAll(itemClass);
        const btnPrev = document.querySelector(btnPrevClass);
        const btnNext = document.querySelector(btnNextClass);

        const slideWidth = item[0].offsetWidth / 10;
        console.log(item[0].offsetWidth);
        let totalSlides = slidesData.length;
        let slideIndex = 1;
        let slideOffset = 0;
        let sliderBarOffset = 0;

        const sliderBar = document.querySelector('.slider__bar');
        const sliderThumb = sliderBar.querySelector('.slider__thumb');
        const sliderBarWidth = sliderBar.offsetWidth / 10;
        const sliderThumbWidth = Math.floor(sliderBarWidth / totalSlides);

        sliderThumb.style.width = `${sliderThumbWidth}rem`;
        inner.style.width = `${totalSlides}00%`;

        btnPrev.addEventListener('click', () => {
            if (slideIndex === 1) {;
                inner.style.transform = `translateX(-${slideWidth * (totalSlides - 1)}rem)`;
                sliderThumb.style.transform = `translateX(${sliderThumbWidth * (totalSlides - 1)}rem)`;
                slideIndex = totalSlides;
                slideOffset = slideWidth * (totalSlides - 1);
                sliderBarOffset = sliderThumbWidth * (totalSlides - 1);
            }
            else if (slideIndex !== 1) {
                inner.style.transform = `translateX(${slideOffset - slideWidth}rem)`;
                sliderThumb.style.transform = `translateX(-${sliderBarOffset - sliderThumbWidth}rem)`;
                slideIndex -= 1;
                slideOffset -= slideWidth;
                sliderBarOffset -= sliderThumbWidth;
            }
            bgColor()
        })

        btnNext.addEventListener('click', () => {
            if (slideIndex === totalSlides) {
                inner.style.transform = `translateX(${0}rem)`;
                sliderThumb.style.transform = `translateX(${0}rem)`;
                slideIndex = 1;
                slideOffset = 0;
                sliderBarOffset = 0;
            }
            else if (slideIndex !== totalSlides) {
                inner.style.transform = `translateX(-${slideOffset + slideWidth}rem)`;
                sliderThumb.style.transform = `translateX(${sliderBarOffset + sliderThumbWidth}rem)`;
                slideIndex += 1;
                slideOffset += slideWidth;
                sliderBarOffset += sliderThumbWidth;
                console.log(slideWidth);
            }
            bgColor()
        })


        function bgColor() {
            const preview = document.querySelector('.preview')
            preview.style.backgroundColor = `rgba(${slidesData[slideIndex - 1].imgBg}, 0.2)`;
        }



    }

    const previewSlides = [
        {
            img: './assets/img/preview-card-1.jpg',
            imgBg: '65, 55, 170'
        },
        {
            img: './assets/img/preview-card-2.png',
            imgBg: '26, 16, 71'
        },
    ];

    previewSlider('.preview__slider-wrapper', '.preview__slide', '.preview__item-slider-prev', '.preview__item-slider-next', previewSlides)

});