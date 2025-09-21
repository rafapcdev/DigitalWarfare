
const toggleBtn = document.getElementById('toggleTheme');
const main = document.querySelector('main');

toggleBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
    if (main.classList.contains('dark')) {
        toggleBtn.textContent = 'Modo Claro';
    } else {
        toggleBtn.textContent = 'Modo Escuro';
    }
});
