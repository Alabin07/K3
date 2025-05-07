// Execute theme application as early as possible
(function() {
    // Check and apply saved theme immediately
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the saved theme or system preference
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
})();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer (Scroll-based element reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Menu Toggle (Mobile or Navbar)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    }

    // Theme Toggle (Light/Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    
    // Update the toggle button text based on current theme (optional)
    function updateToggleText() {
        if (themeToggle) {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            themeToggle.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    }
    
    // Set initial toggle text
    updateToggleText();

    // Toggle theme and save to localStorage
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            try {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                if (currentTheme === 'dark') {
                    document.documentElement.removeAttribute('data-theme'); // Switch to light mode
                    localStorage.setItem('theme', 'light');
                } else {
                    document.documentElement.setAttribute('data-theme', 'dark'); // Switch to dark mode
                    localStorage.setItem('theme', 'dark');
                }
                // Update toggle text after changing theme
                updateToggleText();
            } catch (e) {
                console.error('Error toggling theme:', e);
            }
        });
    }
});