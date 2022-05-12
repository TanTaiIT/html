var slide_index = 0
const slides = document.querySelectorAll(".slide")

const next = document.querySelector('.slide-next')
const prev = document.querySelector('.slide-prev')
// prev.addEventListener('click', () => )
function remove() {
    slides.forEach((e) => {
        e.classList.remove('active')
    })
}
function nextSlide() {
    slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
}
function preSlide() {
    slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1
}
function showSlide() {
    remove()
    slides[slide_index].classList.add('active')
}
prev.addEventListener('click', () => {
    preSlide()
    showSlide()
})
next.addEventListener('click', () => {
    nextSlide()
    showSlide()
})
