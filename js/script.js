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

// Bouton See more (menu)

const seeMoreBtn = document.getElementById('see-more');
const menuBoxes = document.querySelector('.menu .contenus');

seeMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const isExpanded = menuBoxes.classList.toggle('expanded');
    seeMoreBtn.textContent = isExpanded ? 'See less' : 'See more';
    seeMoreBtn.setAttribute('aria-expanded', isExpanded);

    if (!isExpanded) {
        document.getElementById('menu').scrollIntoView();
    }
});

// Bouton WhatsApp flottant

const whatsappBtn = document.querySelector('.whatsapp-float');
const defaultMessage = encodeURIComponent('Hello, I have a question.');

whatsappBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${defaultMessage}`;

// Formulaire de réservation

const reservationForm = document.querySelector('.reservation-form');
const dateInput = document.getElementById('res-date');

dateInput.min = new Date().toISOString().split('T')[0];

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name').value.trim();
    const guests = document.getElementById('res-guests').value;
    const date = dateInput.value;
    const time = document.getElementById('res-time').value;
    const notes = document.getElementById('res-notes').value.trim();

    let message = `Hello ${CONFIG.name}, I would like to book a table.\n` +
                  `Name: ${name}\n` +
                  `Guests: ${guests}\n` +
                  `Date: ${date}\n` +
                  `Time: ${time}`;

    if (notes) {
        message += `\nNote: ${notes}`;
    }

    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});