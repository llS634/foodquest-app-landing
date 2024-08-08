function toggleTheme() {
    const link = document.querySelector('link[rel="stylesheet"]');
    const currentTheme = link.getAttribute('href');
    
    if (currentTheme === 'style.css') {
        link.setAttribute('href', 'style-theme.css');
    } else {
        link.setAttribute('href', 'style.css');
    }
}

function toggleTheme() {
    const link = document.querySelector('link[rel="stylesheet"]');
    const currentTheme = link.getAttribute('href');
    const themeIcon = document.getElementById('theme-icon');

    if (currentTheme === 'style.css') {
        link.setAttribute('href', 'style-theme.css');
        themeIcon.setAttribute('src', 'assets/svg/header_block/color-theme-light.svg');
    } else {
        link.setAttribute('href', 'style.css');
        themeIcon.setAttribute('src', 'assets/svg/header_block/color-theme-dark.svg');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.get-app-button, .get-app-mini');
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            popup.style.display = 'block';
        });
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.theme-switcher');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            themeSwitcher.style.display = 'none';
        } else {
            themeSwitcher.style.display = 'block';
        }
    });
});