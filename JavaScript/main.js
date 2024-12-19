function toggleMenu() {
    const menu = document.getElementById('menu');
    const burgerMenu = document.querySelector('.burger-menu');

    menu.classList.toggle('show'); // Показываем или скрываем меню
    burgerMenu.classList.toggle('active'); // Анимация бургер-меню

    // Закрываем меню при клике вне его
    window.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && menu.classList.contains('show')) {
            menu.classList.remove('show');
            burgerMenu.classList.remove('active');
        }
    });
}