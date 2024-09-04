let menuBtn = document.querySelector('.menu-mobile');
menuBtn.addEventListener('click', ()=>{
    let itemsMenu = document.querySelector('nav.menu-mobile ul');
    itemsMenu.classList.toggle('show');
})