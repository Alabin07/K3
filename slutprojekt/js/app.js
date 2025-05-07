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
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Theme Toggle (Light/Dark Mode)
const toggle = document.getElementById('theme-toggle');

// Check and apply saved theme on page load
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme or system preference
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggle) toggle.checked = true; // Sync toggle with dark mode if it's applied
}

// Toggle theme and save to localStorage
toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme'); // Switch to light mode
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark'); // Switch to dark mode
    localStorage.setItem('theme', 'dark');
  }
});
