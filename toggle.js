const toggle = document.getElementById('toggle-btn');

toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
        'data-theme',
        currentTheme === 'dark' ? 'light' : 'dark'
    );
})
