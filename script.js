document.addEventListener('DOMContentLoaded', () => {

    // === AJUSTE DE VELOCIDAD DEL VIDEO ===
    const videoPlayer = document.querySelector('.video-player'); 
    if (videoPlayer) {
        // Establece la velocidad de reproducción (1.0 es normal, <1 es más lento)
        videoPlayer.playbackRate = 0.75; // <-- 75% de velocidad. Cambia a 0.5 para 50%
    }

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

    // === CÓDIGO PARA MODO OSCURO ===
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        } else {
            body.classList.remove('dark-mode');
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
    }

    // 1. Cargar la preferencia guardada al iniciar la página
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // 2. Agregar el evento de clic al botón
    themeToggle.addEventListener('click', () => {
        let newTheme;
        if (body.classList.contains('dark-mode')) {
            newTheme = 'light';
        } else {
            newTheme = 'dark';
        }

        // Aplicar el nuevo tema
        applyTheme(newTheme);

        // Guardar la preferencia en localStorage
        localStorage.setItem('theme', newTheme);
    });
});