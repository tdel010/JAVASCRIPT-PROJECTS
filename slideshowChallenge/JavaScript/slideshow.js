const slides = document.querySelectorAll('#slideshow > div');
let currentSlideIndex = 0;

if (slides.length > 0) {
  slides[currentSlideIndex].classList.add('active');

  setInterval(() => {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
  }, 3000);
}