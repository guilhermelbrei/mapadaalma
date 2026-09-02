document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // 2. Comportamento do Header no Scroll (Opcional, para adicionar sombra ou mudar fundo)
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-md', 'bg-opacity-95');
                header.classList.remove('bg-opacity-0');
            } else {
                header.classList.remove('shadow-md', 'bg-opacity-95');
                header.classList.add('bg-opacity-0');
            }
        });
    }

    // 3. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
