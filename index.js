const prevBtn = document.querySelector('.section-2-mobile__prev-btn');
const nextBtn = document.querySelector('.section-2-mobile__next-btn');
const sliderWrapper = document.querySelector('.section-2-mobile__wrapper');
const cards = document.querySelectorAll('.section-2-mobile__wrapper__card');

let currentSlide = 0;
const maxSlides = cards.length - 1;
const slideWidth = cards[0].clientWidth + 10; //10px margin-right
const sliderWidth = maxSlides * slideWidth;

sliderWrapper.style.width = `${sliderWidth}px`;

// Funkcja do aktualizowania stylów slajdów w zależności od aktualnego slajdu
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

// Dodanie obsługi zdarzenia kliknięcia przycisków next i prev
nextBtn.addEventListener('click', () => {
    currentSlide++;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    updateSlider();
});

// Aktualizacja slidera przy załadowaniu strony
updateSlider();

///////////////////////////////////////

const faqQuestions = document.querySelectorAll('.faq__column__item__question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const target = question.getAttribute('data-target');
        const answer = document.querySelector(target);

        question.classList.toggle('active');
        answer.classList.toggle('active');
        answer.style.maxHeight = answer.classList.contains('active') ? answer.scrollHeight + 'px' : 0;
    });
});
