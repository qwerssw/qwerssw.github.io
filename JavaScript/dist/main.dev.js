"use strict";

function toggleMenus() {
  var sorts = document.getElementById('sorts');
  var burgerMenus = document.querySelector('.burger-sort');
  sorts.classList.toggle('show');
  burgerMenus.classList.toggle('active');
  window.addEventListener('click', function (event) {
    if (!burgerMenus.contains(event.target) && menu.classList.contains('show')) {
      sorts.classList.remove('show');
      burgerMenus.classList.remove('active');
    }
  });
}

function toggleMenu() {
  var menuList = document.querySelector('.menu-list');
  menuList.classList.toggle('show');
}

function checkWidth() {
  var burger = document.querySelector('.burger');

  if (window.innerWidth <= 473) {
    burger.addEventListener('click', toggleMenu);
  } else {
    burger.removeEventListener('click', toggleMenu);
    var menuList = document.querySelector('.menu-list');
    menuList.classList.remove('show');
  }
}

checkWidth();
window.addEventListener('resize', checkWidth);