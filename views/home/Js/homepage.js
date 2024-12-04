const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        // Reset all classes
        item.classList.remove('active', 'next', 'previous', 'hidden');

        // Current (active) item
        if (index === currentIndex) {
            item.classList.add('active');
        } 
        // Next item
        else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('next');
        } 
        // Previous item
        else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('previous');
        }
        // Hide other items
        else {
            item.classList.add('hidden');
        }
    });
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

// Initialize carousel state
updateCarousel();

// Auto-slide every 3 seconds
setInterval(autoSlide, 3000);
window.addEventListener('load', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.classList.add('visible');
    });
});

