


function buttonSub(){
    const buttonElement = document.querySelector('.button-subscribe');

    if (buttonElement.innerText ==='Subscribe') {
       buttonElement.innerHTML = 'Subscribed';
       buttonElement.classList.add('submit-button');
    }else {
       buttonElement.innerHTML = 'Subscribe';
       buttonElement.classList.remove('submit-button');

    }
 };

function openMovie(){
   const movieIcon = document.querySelector('.movie-image');
   const wacthOnline = document.querySelectorAll('watch-movie')
    
   if (movieIcon.innerHTML){
      wacthOnline.innerHTML
   };


 const swiper = new Swiper('.swiper', {
    autoplay:{
       delay: 3000,
       disableOnInteraction: false,
    },
// Optional parameters
loop: true,

// If we need pagination
pagination: {
 el: '.swiper-pagination',
 clickable:true,
},

// Navigation arrows
navigation: {
 nextEl: '.swiper-button-next',
 prevEl: '.swiper-button-prev',
},

 });
