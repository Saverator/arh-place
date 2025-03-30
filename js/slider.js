const sliderContainer = document.querySelector('.slides')
const sliderArrowNext = document.querySelector('.slider-arrow_right')
const sliderArrowPrev = document.querySelector('.slider-arrow_left')
const sliderPins = document.querySelector('.slider-pins')

const slides = sliderContainer.querySelectorAll('img').length
let currentSlide = 1

for (let i = 0; i < slides; i++) {
    const pin = document.createElement('div')
    pin.classList.add('slider-pins__pin')
    if (i === 0) {
        pin.classList.add('active')
    }
    sliderPins.appendChild(pin)
}

const pins = document.querySelectorAll('.slider-pins__pin')

pins.forEach((pin, index) => {
    pin.addEventListener('click', () => {
        goToSlide(index + 1)
    })
})

sliderArrowNext.addEventListener('click', () => {
    (currentSlide === slides) ? goToSlide(1) : goToSlide(++currentSlide)
})

sliderArrowPrev.addEventListener('click', () => {
    (currentSlide === 1) ? goToSlide(3) : goToSlide(--currentSlide)
})

function goToSlide(index) {
    updatePin(index - 1)
    currentSlide = index
    sliderContainer.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`
}

function updatePin(index) {
    pins.forEach((pin) => {
        pin.classList.remove('active');
    })
    pins[index].classList.add('active')
}