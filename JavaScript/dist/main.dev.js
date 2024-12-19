"use strict";

function toggleMenu() {
  var menu = document.getElementById('menu');
  var burgerMenu = document.querySelector('.burger-menu');
  menu.classList.toggle('show'); // Показываем или скрываем меню

  burgerMenu.classList.toggle('active'); // Анимация бургер-меню
  // Закрываем меню при клике вне его

  window.addEventListener('click', function (event) {
    if (!burgerMenu.contains(event.target) && menu.classList.contains('show')) {
      menu.classList.remove('show');
      burgerMenu.classList.remove('active');
    }
  });
}