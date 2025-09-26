// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// Scroll progress indicator only
window.addEventListener('scroll', function () {
    // Update scroll progress indicator
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// DOM Content Loaded Event Handler
document.addEventListener('DOMContentLoaded', function () {
    // Typing Animation
    const options = {
        strings: ['Frontend Developer', 'UI/UX Designer', 'Web Developer', 'React Specialist'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500
    };

    new Typed('#typing-element', options);

    // Animate skill progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 500);
    });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const updateCounter = () => {
            const current = parseInt(counter.innerText);
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 16);
            } else {
                counter.innerText = target;
            }
        };

        setTimeout(updateCounter, 500); // Start after a delay
    });

    // Portfolio filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Set active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Testimonials slider
    new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        menuOverlay.classList.add('open');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
    });

    menuOverlay.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
    });
});
