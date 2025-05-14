/* Animación para las cards */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
            
    function checkCards() {
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
                    
            if(cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, 150 * index); // Retraso escalonado
            }
        });
    }
            
// Ejecutar al cargar y al hacer scroll
window.addEventListener('scroll', checkCards);
    checkCards(); // Verificar al cargar la página
});

// Animación para sección Acerca De
function initAboutSection() {
    const aboutSection = document.querySelector('#nosotros');
    const profileCard = document.querySelector('.animate-from-left');
    const videoCard = document.querySelector('.animate-from-right');
    
    if (!aboutSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profileCard.classList.add('visible');
                videoCard.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(aboutSection);
    
    // Verificar reproducción de video
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('error', () => {
            console.error('Error al cargar el video. Verifica la ruta: ', video.querySelector('source').src);
        });
    }
}

document.addEventListener('DOMContentLoaded', initAboutSection);

// Animación para sección Enlaces
function initLinksSection() {
    const linksSection = document.querySelector('#enlaces');
    const linkCards = document.querySelectorAll('.link-card');
    
    if (!linksSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                linkCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 150 * index);
                });
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(linksSection);
}

document.addEventListener('DOMContentLoaded', function() {
    initAboutSection();
    initLinksSection();
});

// Actualizar año automáticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

