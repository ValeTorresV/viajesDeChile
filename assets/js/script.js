
/* Cambia color de natvar al hacer scroll */
 window.addEventListener('scroll',function(){
    let nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 0)
}) 
