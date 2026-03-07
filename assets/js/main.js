/* 
    MERON MULUYE - INTERACTIVITY
    Formal, Subtle Transitions
*/

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initReveal();
    initSmoothScroll();
    initMobileMenu();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Optional: prevent scrolling when menu is open
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}
function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    const savedTheme = localStorage.getItem('formal-theme') || 'light';

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeBtn.textContent = 'W'; // W for White/Light
    } else {
        themeBtn.textContent = 'B'; // B for Black/Dark
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('formal-theme', isDark ? 'dark' : 'light');
        themeBtn.textContent = isDark ? 'W' : 'B';
    });
}

// Subtle Scroll Reveal
function initReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Refined Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
}
