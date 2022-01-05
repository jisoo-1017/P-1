const menuBtn = document.querySelector('.menu-btn');
const section = document.querySelector('section');
check=0;

menuBtn.addEventListener('click', function(){
    section.classList.toggle('menu_on');
})

menuBtn.addEventListener('blur', function(){
    section.classList.remove('menu_on');
})