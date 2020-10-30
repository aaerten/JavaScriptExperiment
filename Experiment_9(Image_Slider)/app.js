const imageSlide=document.querySelector('.image-slide');
const Images=document.querySelectorAll('.image-slide img');

const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');

let counter =1;
const size = Images[0].clientWidth;

imageSlide.style.transform='translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter>=Images.length-1) return;
    imageSlide.style.transition="transform 0.7s ease-in-out";
    counter++;
    imageSlide.style.transform='translateX('+(-size * counter) +'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    imageSlide.style.transition="transform 0.7s ease-in-out";
    counter--;
    imageSlide.style.transform='translateX('+(-size * counter) +'px)';
});

imageSlide.addEventListener('transitionend',()=>{
    if(Images[counter].id==='lastClone'){
    imageSlide.style.transition="none";
    counter= Images.length-2;
    imageSlide.style.transform='translateX('+(-size * counter) +'px)';
    }
        if(Images[counter].id==='firstClone'){
    imageSlide.style.transition="none";
    counter= Images.length-counter;
    imageSlide.style.transform='translateX('+(-size * counter) +'px)';
    }
});