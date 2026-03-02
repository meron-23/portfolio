// Certificate Modal functionality
const certificates = {
    'unsupervised-learning': {
        name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        description: 'DeepLearning.AI specialization covering clustering, anomaly detection, collaborative filtering, deep learning-based recommenders, and reinforcement learning techniques.',
        url: 'https://coursera.org/share/ea3b32a67ec211cab6bdeced61df95b6'
    },
    'supervised-learning': {
        name: 'Supervised Machine Learning: Regression and Classification',
        description: 'DeepLearning.AI course covering linear/logistic regression, scikit-learn, NumPy, predictive modeling, and model evaluation techniques.',
        url: 'https://coursera.org/share/aca7d0d1148223b376886fc13a9f679e'
    },
    'machine-learning-python': {
        name: 'Machine Learning with Python',
        description: 'freeCodeCamp certification covering machine learning fundamentals, Python programming, and practical ML applications.',
        url: 'https://www.freecodecamp.org/certification/fcc88ca2e91-0ac6-433e-85d0-16e3533ff9ea/machine-learning-with-python-v7'
    },
    'data-analysis-python': {
        name: 'Data Analysis with Python',
        description: 'freeCodeCamp certification covering data analysis techniques, Python libraries, and data manipulation skills.',
        url: 'https://www.freecodecamp.org/certification/fcc88ca2e91-0ac6-433e-85d0-16e3533ff9ea/data-analysis-with-python-v7'
    },
    'data-visualization': {
        name: 'Data Visualization',
        description: 'freeCodeCamp certification covering data visualization techniques, Python libraries, and creating informative visualizations.',
        url: 'https://www.freecodecamp.org/certification/fcc88ca2e91-0ac6-433e-85d0-16e3533ff9ea/data-visualization'
    }
};

function showCertificate(certificateId) {
    console.log('Showing certificate:', certificateId);
    const modal = document.getElementById('certificate-modal');
    const certificate = certificates[certificateId];
    
    if (certificate && modal) {
        document.getElementById('certificate-name').textContent = certificate.name;
        document.getElementById('certificate-description').textContent = certificate.description;
        document.getElementById('certificate-link').href = certificate.url;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        console.log('Modal should be visible now');
    } else {
        console.error('Certificate not found or modal not available');
    }
}

function closeCertificate() {
    console.log('Closing certificate modal');
    const modal = document.getElementById('certificate-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize modal event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up modal listeners');
    
    // Close modal when clicking outside
    document.addEventListener('click', function(event) {
        const modal = document.getElementById('certificate-modal');
        if (modal && modal.style.display === 'block' && event.target === modal) {
            closeCertificate();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeCertificate();
        }
    });
    
    console.log('Modal listeners set up');
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 40;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation state
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('nav-link--active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav-link--active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // Header background on scroll
    const header = document.querySelector('.header');
    
    function updateHeaderBackground() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('scroll', updateHeaderBackground);
    updateHeaderBackground(); // Initial call

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards and education/skill categories
    const animatedElements = document.querySelectorAll('.project-card, .education-category, .skill-category');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Project card hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Lazy loading for images (native support)
    if ('loading' in HTMLImageElement) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        });
    }

    // Print functionality
    const printLinks = document.querySelectorAll('.print-link');
    
    printLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.print();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Press 'Escape' to scroll to top
        if (e.key === 'Escape') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Press '/' to focus search (if search is implemented)
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            // Future: focus search input
        }
    });

    // Performance optimization: Debounce scroll events
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

    const debouncedScroll = debounce(function() {
        updateActiveNav();
        updateHeaderBackground();
    }, 10);

    window.addEventListener('scroll', debouncedScroll);

    // Add CSS class for active navigation state
    const style = document.createElement('style');
    style.textContent = `
        .nav-link--active {
            color: var(--accent) !important;
            font-weight: 500;
        }
        
        .nav-link--active::after {
            width: 100% !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Accessibility: Focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', function(e) {
        // Tab key navigation
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add keyboard navigation styles
    const keyboardStyle = document.createElement('style');
    keyboardStyle.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(keyboardStyle);
});
