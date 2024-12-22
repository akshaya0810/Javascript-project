const slides = document.querySelectorAll('.slide');
let currentIndex = 1;

document.getElementById('prevBtn').addEventListener('click', () => {
  changeSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  changeSlide(1);
});

function changeSlide(direction) {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
}
