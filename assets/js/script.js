
/* let nav = document.querySelector('nav');
window.addEventListener('scroll',function(){
if(window.pageYOffset)
}) */

$(document).ready(function(){
    $('#navbar').scroll(function () { 
        $(this).css({
            "background": "red",
        });
    });
})