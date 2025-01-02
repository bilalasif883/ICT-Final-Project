let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slides img').length;
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slides img').length;
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlides();
}
setInterval(nextSlide, 7000);

document.addEventListener('DOMContentLoaded', showSlides);

