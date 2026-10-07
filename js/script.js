            // Effet scroll au header

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Menu burger

const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');

function closeMenu() {
    navBar.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
    const isOpen = navBar.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
});

navBar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});