"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burger');
  var menuList = document.getElementById('menuList'); // Проверка, что элементы найдены

  if (burger && menuList) {
    burger.addEventListener('click', function () {
      menuList.classList.toggle('show'); // Исправлено: classList

      burger.classList.toggle('active'); // Исправлено: classList
    });
  } else {
    console.error('Элементы не найдены на странице!');
  }
}); //2

function toggleContent() {
  document.querySelectorAll('.toggle').forEach(function (footer) {
    footer.addEventListener('click', function () {
      // Находим следующий элемент списка (ul)
      var content = footer.nextElementSibling; // Проверяем текущее состояние отображения списка и переключаем его

      if (content.style.display === "block") {
        content.style.display = "none"; // Скрываем содержимое
      } else {
        content.style.display = "block"; // Показываем содержимое
      }
    });
  });
} // Функция для проверки ширины экрана


function checkWidth() {
  if (window.innerWidth <= 425) {
    toggleContent(); // Включаем функциональность
  } else {
    // Удаляем обработчики событий, если ширина больше 425px
    document.querySelectorAll('.toggle').forEach(function (footer) {
      var content = footer.nextElementSibling;
      footer.removeEventListener('click', toggleContent);
      content.style.display = ""; // Сбрасываем стиль отображения
    });
  }
} // Проверяем ширину при загрузке страницы


checkWidth(); // Проверяем ширину при изменении размера окна

window.addEventListener('resize', checkWidth);