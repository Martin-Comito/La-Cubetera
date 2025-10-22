document.addEventListener('DOMContentLoaded', () => {
    // === SLIDER HERO ===
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambiar de slide cada 5 segundos
    if (slides.length > 1) { // Solo si hay más de un slide
        setInterval(nextSlide, 5000); 
    } else if (slides.length === 1) { // Si solo hay un slide, asegúrate de que esté activo
        slides[0].classList.add('active');
    }

    // === AÑO ACTUAL EN EL FOOTER ===
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});