
// Récupérer toutes les sections marquées pour l'animation
const revealElements = document.querySelectorAll('.reveal-hidden');

// Créer l'observateur
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Ajouter la classe visible quand l'élément entre dans l'écran
            entry.target.classList.add('reveal-visible');
            // Arrêter d'observer une fois l'animation jouée (optionnel)
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15, // Démarrer l'animation quand 15% de l'élément est visible
    rootMargin: "-20px"
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
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            // Retirer la classe active de tous les liens
            navLinks.forEach(link => link.classList.remove('active'));
            // Ajouter la classe active au lien correspondant
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.3 // Déclenchement quand 30% de la section est visible
});

sections.forEach(section => {
    scrollSpyObserver.observe(section);
});
