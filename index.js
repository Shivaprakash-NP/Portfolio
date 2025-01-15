const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarLinksItems = document.querySelectorAll('.navbar-links a');
const toggleBtn = document.getElementById('theme-toggle-btn');
const savedTheme = localStorage.getItem('theme');

function applyTimeBasedTheme() {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 18) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleBtn.textContent = '🔆';
        toggleBtn.setAttribute('data-tooltip', 'Switch To Dark Theme');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '🌙';
        toggleBtn.setAttribute('data-tooltip', 'Switch To Light Theme');
        localStorage.setItem('theme', 'dark-mode');
    }
}

if (savedTheme) {
    document.body.classList.add(savedTheme);
    toggleBtn.textContent = savedTheme === 'dark-mode' ? '🌙' : '🔆';
    toggleBtn.setAttribute('data-tooltip', savedTheme === 'dark-mode' ? 'Switch To Light Theme' : 'Switch To Dark Theme');
} else {
    applyTimeBasedTheme();
}

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

window.addEventListener('click', (e) => {
    if (!navbarLinks.contains(e.target) && !navbarToggle.contains(e.target)) {
        navbarLinks.classList.remove('active');
    }
});

navbarLinksItems.forEach((link) => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});

toggleBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleBtn.textContent = '🔆';
        toggleBtn.setAttribute('data-tooltip', 'Switch To Dark Theme');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '🌙';
        toggleBtn.setAttribute('data-tooltip', 'Switch To Light Theme');
        localStorage.setItem('theme', 'dark-mode');
    }
});

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.querySelector(".footer p").innerHTML = `&#169; ${new Date().getFullYear()} Shivaprakash. All rights reserved.`;

function handleFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem('formSubmitted', 'true');
    event.target.submit();
}

function clearFormAfterReturn() {
    if (localStorage.getItem('formSubmitted') === 'true') {
        document.getElementById('contact-form').reset();
        localStorage.removeItem('formSubmitted');
    }
}

window.onload = clearFormAfterReturn;
