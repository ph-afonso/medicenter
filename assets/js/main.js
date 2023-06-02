let menuMobile = document.querySelector('.header__menu-mobile');
let menuLinks = document.querySelector('.header__menu-links');
let iconMenuOpen = document.querySelector('.header__menu-mobile-open');
let iconMenuClose = document.querySelector('.header__menu-mobile-close');
menuMobile.addEventListener('click', function(){
    if(menuLinks.style.display == 'none') {
        menuLinks.style.display = 'flex';
        iconMenuOpen.style.display = 'none';
        iconMenuClose.style.display = 'block';
    }else{
        menuLinks.style.display = 'none';
        iconMenuOpen.style.display = 'block';
        iconMenuClose.style.display = 'none';
    }
});