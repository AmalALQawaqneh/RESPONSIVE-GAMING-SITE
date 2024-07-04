let currentIndex = 0;

function showNextImage() {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

setInterval(showNextImage, 5000);