

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const Close = document.getElementById('close');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.remove('hidden');
    hamburger.classList.add('hidden');
    Close.classList.remove('hidden')
});

Close.addEventListener('click', ()=>{
    navMenu.classList.add('hidden');
    hamburger.classList.remove('hidden');
    Close.classList.add('hidden');
});

var swiper = new swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });