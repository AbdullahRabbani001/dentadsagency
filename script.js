



// ==========================================
// DENTADS - JAVASCRIPT FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignore empty hash or just '#'
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================
    // FORM SUBMISSION HANDLER
    // ==========================================
   // ==========================================
// CONTACT FORM SUBMISSION (MAILTO METHOD)
// ==========================================
// ==========================================
// CONTACT FORM - GMAIL WEB LINK METHOD
// ==========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const clinic = document.getElementById('clinic').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        // Validation
        if (!name || !clinic || !email || !phone || !message ) {
            formMessage.className = 'form-message error';
            formMessage.textContent = '✗ Please fill in all required fields.';
            formMessage.style.display = 'block';
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.className = 'form-message error';
            formMessage.textContent = '✗ Please enter a valid email address.';
            formMessage.style.display = 'block';
            return;
        }
        
        // Create email content
        const toEmail = 'hadeer@dentadsagency.com';
        const subject = 'New Lead from DentAds Website';
        const body = `
New Inquiry Details:
━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Clinic Name: ${clinic}
Email: ${email}
Phone: ${phone}
Message:  ${message}

━━━━━━━━━━━━━━━━━━━━
Submitted from: DentAds Website
Date: ${new Date().toLocaleString()}
        `.trim();
        
        // Create Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
      // ✅ SHOW THANK YOU MESSAGE FIRST
formMessage.className = 'form-message success';
formMessage.innerHTML = `
✓ <strong>Thank You!</strong><br>
Your inquiry has been received.<br>
Our team will contact you shortly.
`;
formMessage.style.display = 'block';

// ✅ OPEN GMAIL AFTER 2.5 SECONDS
setTimeout(() => {
    window.open(gmailUrl, '_blank');
}, 2500);

// Reset form after 3 seconds
setTimeout(() => {
    contactForm.reset();
}, 3000);
       
    });
}
    
    // ==========================================
    // FADE-IN ANIMATION ON SCROLL
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections for fade-in effect
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .value-card, .step-card, .case-study-card, .why-card, .testimonial-card, .faq-item'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // ==========================================
    // EXTERNAL LINKS - OPEN IN NEW TAB
    // ==========================================
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
});



const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.setAttribute('id', 'scrollToTop');
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #00BCD4;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ADD THIS CODE AT THE END OF script.js FILE

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


   
// ========================================
// SUCCESS STORIES SLIDER
// ========================================
// ========================================
// SUCCESS STORIES SLIDER - MANUAL ONLY
// ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.case-study-card.slide');
const dots = document.querySelectorAll('.slider-dots .dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Button clicks
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// Dot clicks
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// NO AUTO-SCROLL - Manual control only
// setInterval(nextSlide, 5000); ← REMOVED

// ========================================
// FAQ ACCORDION
// ========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});


// ========================================
// CHANGE CTA TEXT ON MOBILE
// ========================================
function updateCTAText() {
    const navCTA = document.querySelector('.nav-cta');
    if (navCTA && window.innerWidth <= 768) {
        navCTA.textContent = '';
    }
}

// Run on load and resize
updateCTAText();
window.addEventListener('resize', updateCTAText);


// ========================================
// MOBILE MENU TOGGLE - WORKING VERSION
// ========================================

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const body = document.body;
const navLinkItems = document.querySelectorAll('.nav-link');

// Toggle menu function
function toggleMenu() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Click on hamburger button
if (navToggle) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
}

// Close menu when clicking on any link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    }
});

// Prevent menu close when clicking inside menu
if (navLinks) {
    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// ========================================
// TESTIMONIALS MOBILE SLIDER - FIXED
// ========================================

// ========================================
// TESTIMONIALS MOBILE SLIDER - MANUAL ONLY
// ========================================

function initTestimonialSlider() {
    if (window.innerWidth > 768) return;
    
    let testimonialIndex = 0;
    const testimonialSlides = document.getElementById('testimonialSlides');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    const totalTestimonials = 4;
    
    if (!testimonialSlides) return;
    
    function showTestimonial(index) {
        if (index >= totalTestimonials) {
            testimonialIndex = 0;
        } else if (index < 0) {
            testimonialIndex = totalTestimonials - 1;
        } else {
            testimonialIndex = index;
        }
        
        testimonialSlides.style.transform = `translateX(-${testimonialIndex * 100}%)`;
        
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === testimonialIndex);
        });
    }
    
    // Next button
    if (testimonialNext) {
        testimonialNext.addEventListener('click', () => {
            showTestimonial(testimonialIndex + 1);
        });
    }
    
    // Previous button
    if (testimonialPrev) {
        testimonialPrev.addEventListener('click', () => {
            showTestimonial(testimonialIndex - 1);
        });
    }
    
    // Dot clicks
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // NO AUTO-SLIDE - Manual control only
    
    // Show first slide
    showTestimonial(0);
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialSlider);
} else {
    initTestimonialSlider();
}


// Re-initialize on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initTestimonialSlider();
    }, 250);
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu first
            if (navToggle) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
            
            // Then scroll
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    });
});