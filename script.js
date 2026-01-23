// ========================================
// 1. Loading Screen Animation
// ========================================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hide');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// ========================================
// 2. Typewriter Effect
// ========================================

const typewriterElement = document.getElementById('typewriter');
const texts = [
    'UI/UX Designer',
    'Web Developer',
    'Frontend Expert',
    'Creative Coder'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        // Remove characters
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Add characters
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    // Check if word is complete
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of word
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Start typewriter effect after loading screen
setTimeout(() => {
    typeWriter();
}, 2500);

// ========================================
// 3. Smooth Scrolling Navigation
// ========================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll to section
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 4. Active Navigation on Scroll
// ========================================

const sections = document.querySelectorAll('section[id]');

function activateNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavOnScroll);

// ========================================
// 5. Contact Form Handling
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && message) {
        // Show success message (you can replace this with actual form submission)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// ========================================
// 6. Scroll Reveal Animations
// ========================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .service-card, .info-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll reveal
window.addEventListener('scroll', revealOnScroll);

// Set initial state for scroll reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.project-card, .service-card, .info-card');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// ========================================
// 7. Navbar Background on Scroll
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 100) {
        navbar.querySelector('.nav-container').style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.querySelector('.nav-container').style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.16)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// 8. Cursor Effect (Optional Enhancement)
// ========================================

// Create custom cursor (optional - can be removed if not needed)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const distance = Math.sqrt(Math.pow(mouseX - cursorX, 2) + Math.pow(mouseY - cursorY, 2));
    
    if (distance < 1) {
        cursorX = mouseX;
        cursorY = mouseY;
    } else {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
    }
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

// Uncomment to enable custom cursor
// animateCursor();

// ========================================
// 9. Social Links Target Blank
// ========================================

const socialLinks = document.querySelectorAll('.social-link, .footer-social a');
socialLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// ========================================
// 10. Image Lazy Loading
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// 11. Download CV Button
// ========================================

const downloadCVBtn = document.querySelector('.btn-outline');
if (downloadCVBtn && downloadCVBtn.textContent.includes('Download CV')) {
    downloadCVBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual CV file path
        const cvPath = 'path/to/your/cv.pdf';
        
        // Create temporary link and trigger download
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'John_Doe_CV.pdf';
        // link.click();
        
        // For demo purposes, show alert
        alert('CV download would start here. Please add your CV file path.');
    });
}

// ========================================
// 12. Console Welcome Message
// ========================================

console.log('%c Welcome to My Portfolio! ', 'background: #00ADB5; color: white; font-size: 20px; padding: 10px;');
console.log('%c Thanks for checking out my code! 😊', 'color: #00ADB5; font-size: 14px;');
