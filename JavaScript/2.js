document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menuList = document.getElementById('menuList');


    if (burger && menuList) {
        burger.addEventListener('click', () => {
            menuList.classList.toggle('show'); 
            burger.classList.toggle('active'); 
        });
    } else {
        console.error('Элементы не найдены на странице!');
    }
});

//2
function toggleContent() {
    document.querySelectorAll('.toggle').forEach(footer => {
        footer.addEventListener('click', () => {

            const content = footer.nextElementSibling;
        
            if (content.style.display === "block") {
                content.style.display = "none"; 
            } else {
                content.style.display = "block"; 
            }
        });
    });
}


function checkWidth() {
    if (window.innerWidth <= 425) {
        toggleContent(); 
    } else {

        document.querySelectorAll('.toggle').forEach(footer => {
            const content = footer.nextElementSibling;
            footer.removeEventListener('click', toggleContent);
            content.style.display = ""; 
        });
    }
}

checkWidth();

window.addEventListener('resize', checkWidth);
