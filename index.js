//// section 2 slider
const prevBtn = document.querySelector('.section-2-mobile__prev-btn');
const nextBtn = document.querySelector('.section-2-mobile__next-btn');
const sliderWrapper = document.querySelector('.section-2-mobile__wrapper');
const cards = document.querySelectorAll('.section-2-mobile__wrapper__card');

let currentSlide = 0;
let maxSlides = cards.length - 1;
let slideWidth = cards[0].clientWidth + 10;
let sliderWidth = maxSlides * slideWidth;

sliderWrapper.style.width = `${sliderWidth}px`;

const updateSlider = () => {
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    if (currentSlide === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentSlide === maxSlides) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
};

nextBtn.addEventListener('click', () => {
    currentSlide++;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    updateSlider();
});

updateSlider();

///// models
const modelsPrevBtn = document.querySelector('.models__prev-btn');
const modelsNextBtn = document.querySelector('.models__next-btn');
const modelsWrapper = document.querySelector('.models-wrapper');
const modelsItem = document.querySelectorAll('.models__item');

let modelsCurrentSlide = 0;
let modelsMaxSlides = modelsItem.length - 1;
let modelsSlideWidth = modelsItem[0].clientWidth + 10;
let modelsSliderWidth = modelsMaxSlides * modelsSlideWidth;

modelsWrapper.style.width = `${modelsSliderWidth}px`;

const updateModelsSlider = () => {
    modelsWrapper.style.transform = `translateX(-${modelsCurrentSlide * modelsSlideWidth}px)`;

    if (modelsCurrentSlide === 0) {
        modelsPrevBtn.disabled = true;
    } else {
        modelsPrevBtn.disabled = false;
    }

    if (modelsCurrentSlide === modelsMaxSlides) {
        modelsNextBtn.disabled = true;
    } else {
        modelsNextBtn.disabled = false;
    }
};

modelsNextBtn.addEventListener('click', () => {
    modelsCurrentSlide++;
    updateModelsSlider();
});

modelsPrevBtn.addEventListener('click', () => {
    modelsCurrentSlide--;
    updateModelsSlider();
});

updateModelsSlider();

///// Toggle Collapse
const questions = document.querySelectorAll('.faq li .faq__question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        question.querySelector('.plus-minus-toggle').classList.toggle('collapsed');
        question.parentNode.classList.toggle('active');
    });
});

const faqQcolumnQcollapse = document.querySelector('.faq_column_collapse');
const columnToogleBtn = document.querySelector('.column-toogle-btn');

columnToogleBtn.addEventListener('click', () => {
    faqQcolumnQcollapse.classList.add('active');
    columnToogleBtn.style.display = 'none';
});

///// update on resize
const autoResize = () => {
    if (window.innerWidth < 768) {
        maxSlides = cards.length - 1;
        slideWidth = cards[0].clientWidth + 10;
        sliderWidth = maxSlides * slideWidth;
        updateSlider();
        modelsSliderWidth = modelsMaxSlides * modelsSlideWidth;
        modelsMaxSlides = modelsItem.length - 1;
        modelsSlideWidth = modelsItem[0].clientWidth + 10;
        updateModelsSlider();
    } else {
        return;
    }
};
window.addEventListener('resize', autoResize);
