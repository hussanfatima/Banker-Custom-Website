// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Smooth scroll for scroll indicator
document.querySelector('.scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Email form submission
const emailForm = document.getElementById('emailForm');
if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = emailForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Show success message
        alert('Thank you! Your email has been submitted: ' + email);
        emailInput.value = '';
    });
}
// How It Works Slider
let worksCurrentSlide = 0;
const worksSlides = document.querySelectorAll('.works-slide');
const worksTotalSlides = worksSlides.length;
const worksSliderWrapper = document.getElementById('worksSliderWrapper');
const worksDots = document.querySelectorAll('.works-dot');
const worksPrevBtn = document.getElementById('worksPrevBtn');
const worksNextBtn = document.getElementById('worksNextBtn');

function updateWorksSlider() {
    worksSliderWrapper.style.transform = `translateX(-${worksCurrentSlide * 100}%)`;
    
    // Update dots
    worksDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === worksCurrentSlide);
    });
}

function worksNextSlide() {
    worksCurrentSlide = (worksCurrentSlide + 1) % worksTotalSlides;
    updateWorksSlider();
}

function worksPrevSlide() {
    worksCurrentSlide = (worksCurrentSlide - 1 + worksTotalSlides) % worksTotalSlides;
    updateWorksSlider();
}

// Event listeners for arrow buttons
worksNextBtn.addEventListener('click', worksNextSlide);
worksPrevBtn.addEventListener('click', worksPrevSlide);

// Event listeners for dots
worksDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        worksCurrentSlide = index;
        updateWorksSlider();
    });
});
// Testimonials Slider
let testimonialCurrentSlide = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialTotalSlides = testimonialSlides.length;

function showTestimonial(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    testimonialCurrentSlide = (index + testimonialTotalSlides) % testimonialTotalSlides;
    testimonialSlides[testimonialCurrentSlide].classList.add('active');
    testimonialDots[testimonialCurrentSlide].classList.add('active');
}

function nextTestimonial() {
    showTestimonial(testimonialCurrentSlide + 1);
}

// Auto slide every 5 seconds
setInterval(nextTestimonial, 5000);

// Dot click handlers
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});
// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Show success message
        alert('Thank you for contacting us! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}