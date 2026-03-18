// =============================================
// script.js - Animations et navigation
// J'utilise IntersectionObserver pour les animations au scroll
// C'est mieux qu'un listener sur scroll car plus performant
// =============================================

// On recupere tous les elements qui doivent apparaitre au scroll
const revealElements = document.querySelectorAll('.reveal-hidden');

// Creation de l'observateur
// threshold = 0.05 veut dire que l'animation se declenche quand
// seulement 5% de l'element est visible, comme ca c'est fluide
// rootMargin = 50px fait que ca se declenche un peu avant que
// l'element arrive dans l'ecran
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Quand l'element entre dans l'ecran, on ajoute la classe
            // qui le rend visible (definie dans le CSS)
            entry.target.classList.add('reveal-visible');
        }
    });
}, {
    threshold: 0.05,
    rootMargin: "50px"
});

// On lance l'observation sur chaque element
revealElements.forEach((el) => observer.observe(el));

// =============================================
// Navigation smooth scroll
// Quand on clique sur un lien du menu, ca scroll doucement
// vers la section au lieu de sauter d'un coup
// =============================================
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

// =============================================
// ScrollSpy - lien actif dans la nav
// Ca change le style du lien dans le menu en fonction
// de la section ou on se trouve sur la page
// J'ai utilise un deuxieme observer pour ca
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            // On enleve la classe active de tous les liens
            navLinks.forEach(link => link.classList.remove('active'));

            // Et on la met sur le lien qui correspond a la section visible
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    // 20% de la section doit etre visible pour changer le lien actif
    threshold: 0.2
});

sections.forEach(section => {
    scrollSpyObserver.observe(section);
});
