var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});





// light box js start 
lightbox.option({
  'resizeDuration': 200,
  'maxWidth': 100,
  'wrapAround': true,

})

// header files

function openNav() {
  document.getElementById("myTopnav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myTopnav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

