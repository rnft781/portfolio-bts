
// Récupérer toutes les sections marquées pour l'animation
const revealElements = document.querySelectorAll('.reveal-hidden');

// Créer l'observateur — seuil bas pour déclencher rapidement
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, {
    threshold: 0.05,  // 5% suffit — déclenche plus tôt
    rootMargin: "50px" // Anticipe de 50px avant l'entrée dans le viewport
});

// Lancer l'observation sur chaque élément
revealElements.forEach((el) => observer.observe(el));

// Gestion du scroll nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ScrollSpy - Mise à jour du lien actif au scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    scrollSpyObserver.observe(section);
});
