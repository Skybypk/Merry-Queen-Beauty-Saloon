/* ===================================
   Merry Queen Beauty Saloon
   Premium JavaScript - Interactivity & Animations
   =================================== */

// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Back to Top Button
    // ===================================
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // Active Navigation Link Highlighting
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = navbar.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 150;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-deep-pink');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-deep-pink');
            }
        });
    });

    // ===================================
    // Parallax Effect for Hero Section
    // ===================================
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = heroSection.querySelector('[data-aos]');

            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }

    // ===================================
    // Service Cards Animation
    // ===================================
    const serviceCards = document.querySelectorAll('.service-card-premium');

    serviceCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });

    // ===================================
    // Phone Number Click Tracking
    // ===================================
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone call initiated');
        });
    });

    // ===================================
    // WhatsApp Click Tracking
    // ===================================
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('WhatsApp chat initiated');
        });
    });

    // ===================================
    // Working Hours Check
    // ===================================
    const checkWorkingHours = () => {
        const now = new Date();
        const currentHour = now.getHours();
        
        // Working hours: 12 PM - 9 PM (12:00 - 21:00)
        const isOpen = currentHour >= 12 && currentHour < 21;
        
        console.log(isOpen ? 'Currently Open' : 'Currently Closed');
    };
    
    checkWorkingHours();

    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c👑 Merry Queen Beauty Saloon 👑', 
        'font-size: 24px; font-weight: bold; color: #E8A4B8; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
    console.log('%c✨ Enhancing Your Natural Beauty ✨', 
        'font-size: 16px; color: #D4AF37;');
    console.log('%c📍 House # 31, 2, Model Colony Sheet # 4, Lasi Para, Karachi', 
        'font-size: 12px; color: #666;');
    console.log('%c📞 0333-3341560', 
        'font-size: 12px; color: #C47A8E; font-weight: bold;');

    // ===================================
    // Performance: Debounce Scroll Events
    // ===================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedScrollHandler = debounce(function() {
        // Heavy scroll operations
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // ===================================
    // Add Ripple Effect to Buttons
    // ===================================
    const rippleButtons = document.querySelectorAll('.btn-premium, .btn-gold-premium, .btn-white-premium');

    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                return;
            }

            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple styles
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // Add Loaded Class
    // ===================================
    document.body.classList.add('loaded');

    // ===================================
    // Track Page Visibility
    // ===================================
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '💄 Come back to Merry Queen!';
        } else {
            document.title = 'Merry Queen Beauty Saloon | Enhancing Your Natural Beauty';
        }
    });

    // ===================================
    // Gallery Lightbox (Simple)
    // ===================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const src = img.getAttribute('src');
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${src}" alt="Gallery Image">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            // Add styles
            lightbox.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeIn 0.3s ease;
            `;
            
            const lightboxContent = lightbox.querySelector('.lightbox-content');
            lightboxContent.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
            `;
            
            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.style.cssText = `
                max-width: 100%;
                max-height: 90vh;
                border-radius: 10px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            `;
            
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 3rem;
                cursor: pointer;
                transition: transform 0.3s ease;
            `;
            
            closeBtn.addEventListener('click', function() {
                lightbox.style.opacity = '0';
                setTimeout(() => lightbox.remove(), 300);
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.style.opacity = '0';
                    setTimeout(() => lightbox.remove(), 300);
                }
            });
            
            document.body.appendChild(lightbox);
        });
    });

    // Add fadeIn animation
    const fadeInStyle = document.createElement('style');
    fadeInStyle.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(fadeInStyle);

});

// ===================================
// Service Worker Registration (Optional)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable PWA
        // navigator.serviceWorker.register('/sw.js');
    });
}
