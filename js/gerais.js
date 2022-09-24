let menuMobile = document.querySelector('.icone-menu-mobile');

menuMobile.addEventListener('click', menu => {
  let nav = document.querySelector('.menu .nav');
  
  if(!nav.classList.contains('aberto')) {
    nav.classList.add('aberto');
  } else {
    nav.classList.remove('aberto');
  }
});