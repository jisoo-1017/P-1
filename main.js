const menuBtn = document.querySelector('.menu-btt');
const section = document.querySelector('section');
check=0;

menuBtn.addEventListener('click', function(){
    if(check==0){
        section.style.left=0;
        check=1;
    }else{
        section.style.left='-178px';
        check=0;
    }
})

menuBtn.addEventListener('blur', function(){
    section.style.left='-178px';
    check=0;
})