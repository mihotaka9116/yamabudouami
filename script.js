document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Elements
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const backToTop = document.getElementById('back-to-top');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    let isOpen = false;

    // Toggle Mobile Menu
    function toggleMenu() {
        isOpen = !isOpen;
        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('translate-x-full');
            }, 10);
            lucide.createIcons({
                icons: {
                    'x': document.getElementById('menu-icon')
                }
            });
            // Change icon to X (using Lucide)
            menuToggle.innerHTML = '<i data-lucide="x" size="36"></i>';
        } else {
            mobileMenu.classList.add('translate-x-full');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 500);
            // Change icon back to Menu
            menuToggle.innerHTML = '<i data-lucide="menu" size="36"></i>';
        }
        lucide.createIcons();
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) toggleMenu();
        });
    });

    // Scroll Effects
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Navbar style
        if (scrolled > 50) {
            navbar.classList.remove('py-6', 'bg-white/90');
            navbar.classList.add('py-4', 'bg-white', 'shadow-md');
            menuToggle.style.top = '1rem';
        } else {
            navbar.classList.add('py-6', 'bg-white/90');
            navbar.classList.remove('py-4', 'bg-white', 'shadow-md');
            menuToggle.style.top = '1.5rem';
        }

        // Back to top visibility
        if (scrolled > 300) {
            backToTop.classList.remove('hidden');
            backToTop.classList.add('flex');
        } else {
            backToTop.classList.add('hidden');
            backToTop.classList.remove('flex');
        }
    });

    // Back to top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px -50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.js-fadein');
    fadeElements.forEach(el => observer.observe(el));
});
