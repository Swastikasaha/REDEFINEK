const nextButton=document.querySelector('.next-btn');
const video=document.querySelector('.hero-video');
const movieList=['vdo/hero-1.mp4','vdo/hero-2.mp4','vdo/hero-3.mp4','vdo/hero-4.mp4'];
let index=0;
nextButton.addEventListener('click',function(){
    index+=1
    video.src=movieList[index];
    if(index==3){
        index=-1;
    }
})