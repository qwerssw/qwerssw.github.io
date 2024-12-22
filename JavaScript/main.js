function toggleMenus() {
    const sorts = document.getElementById('sorts');
    const burgerMenus = document.querySelector('.burger-sort');

    sorts.classList.toggle('show'); 
    burgerMenus.classList.toggle('active'); 


    window.addEventListener('click', (event) => {
        if (!burgerMenus.contains(event.target) && menu.classList.contains('show')) {
            sorts.classList.remove('show');
            burgerMenus.classList.remove('active');
        }
    });
}



function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('show'); 
}

function checkWidth() {
    const burger = document.querySelector('.burger');
    if (window.innerWidth <= 473) {
        burger.addEventListener('click', toggleMenu);
    } else {
        burger.removeEventListener('click', toggleMenu);
        const menuList = document.querySelector('.menu-list');
        menuList.classList.remove('show'); 
    }
}
checkWidth();
window.addEventListener('resize', checkWidth);