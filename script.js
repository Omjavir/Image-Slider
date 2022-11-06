const slides = document.querySelectorAll(".slide")
var counter = 0;

console.log(slides.length);

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage();
    if (counter === 0) counter = slides.length;
}

const goNext = () => {
    counter++
    slideImage();
    if (counter === slides.length - 1) counter = 0;
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}