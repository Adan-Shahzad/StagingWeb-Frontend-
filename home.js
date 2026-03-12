// Loading functionality started
function showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Show loading screen
    loadingScreen.style.display = 'flex';
    loadingScreen.classList.remove('fade-out');

    // Hide main content
    mainContent.classList.remove('show');
}

function hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Fade out loading screen
    loadingScreen.classList.add('fade-out');

    // Show main content
    mainContent.classList.add('show');

    // Remove loading screen from DOM after animation
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Simulate loading time and hide loading screen
window.addEventListener('load', function () {
    // Simulate minimum loading time (adjust as needed)
    setTimeout(hideLoading, 1500);
});

// Show loading on page refresh/navigation
window.addEventListener('beforeunload', function () {
    showLoading();
});

// Function to refresh the page (for demo purposes)
function refreshPage() {
    location.reload();
}

// Initialize - show loading screen immediately
document.addEventListener('DOMContentLoaded', function () {
    showLoading();
});
// Loading functionality ended

//hero section starts
// Add smooth scrolling for the contact button
document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    // Add your contact form logic here
    console.log('Contact button clicked');
});

// Add parallax effect on scroll
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});
//hero section ends