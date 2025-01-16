// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Navbar color change on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95');
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('bg-white/95');
            navbar.classList.remove('shadow-md');
        }
    });

    // Smooth reveal animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.classList.remove('opacity-0');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and project cards
    document.querySelectorAll('section, .project-card').forEach((el) => {
        el.classList.add('opacity-0');
        observer.observe(el);
    });

    // Typing effect for the title
    const title = "Renewable Energy Professional";
    const titleElement = document.querySelector('.typing-title');
    if (titleElement) {
        let i = 0;
        titleElement.textContent = '';
        const type = () => {
            if (i < title.length) {
                titleElement.textContent += title.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        };
        type();
    }
});