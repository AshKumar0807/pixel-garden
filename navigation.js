// Get all navigation links and sections
const navLinks = document.querySelectorAll('.nav-links a, .cta-button');
const sections = document.querySelectorAll('section');

// Function to show active section and update navigation
function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Smooth scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Add click event listeners to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
        
        // If mobile menu is open, close it
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
        }
    });
});

// Handle initial page load
window.addEventListener('load', () => {
    // Get the hash from URL or default to 'home'
    const initialSection = window.location.hash.substring(1) || 'home';
    showSection(initialSection);
});

// Update URL hash when section changes
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.location.hash = `#${entry.target.id}`;
        }
    });
}, { threshold: 0.5 });

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});
