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


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// light box js start 
lightbox.option({
  'resizeDuration': 200,
  'maxWidth': 100,
  'wrapAround': true,

})






// gallery javascript

xgallery_images = [
  {
    url: "https://assets.codepen.io/1692350/61.png",
    prompt: "abstract 3d render, rococo, octane render, detailed, black and gold",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/62.png",
    prompt: "abstract 3d render, rococo, octane render, detailed, black and gold",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/60.png",
    prompt: "abstract 3d crystals render, octane render",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/59.png",
    prompt: "abstract 3d crystals render, octane render",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/58.png",
    prompt: "abstract 3d city, octane render, rococo + , abstract + , detailed, black with gold details",
    date: "17.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/57.png",
    prompt: "abstract 3d human face, octane render, rococo + , detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/56.png",
    prompt: "abstract 3d human face, octane render, rococo + , detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/55.png",
    prompt: "abstract 3d statue, octane render, detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/54.png",
    prompt: "abstract 3d statue, octane render, detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/53.png",
    prompt: "abstract 3d statue, octane render, detailed, black with gold details",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/47.png",
    prompt: "splash art, neo noir, cyberpunk girl character portrait, standing in city center, detailed, monochrome with red details",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/46.png",
    prompt: "splash art, neo noir, cyberpunk girl character portrait, standing in city center, detailed, monochrome with red details",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/45.png",
    prompt: "splash art, neo noir, cyberpunk girl character portrait, standing in city center, detailed, monochrome with red details",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/44.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/43.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/42.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/41.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/40.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/39.png",
    prompt: "splash art, cyberpunk character portrait, standing in city center, detailed, black outlines drawing style",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/38.png",
    prompt: "cute chibi dragon person with clothing on a skateboard, pixar style + , highly detailed, 4k",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/50.png",
    prompt: "abstract 3d render, rococo, octane render, detailed",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/37.png",
    prompt: "cute chibi racoon person with clothing sitting on a bench, pixar style + , highly detailed, 4k",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/36.png",
    prompt: "cute chibi penguin person with clothing in the park eating ice cream, pixar style + , highly detailed, 4k",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/52.png",
    prompt: "abstract 3d render, rococo, octane render, detailed",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/35.png",
    prompt: "cute smiling chibi cow in a cup, pixar style, detailed",
    date: "15.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/34.png",
    prompt: "modern luxury apartment with a skyline view of tokyo, plants + , decoration + , cozy + , night, hd, photography, scenery, neon lights, cinematic shot, post edited",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/33.png",
    prompt: "modern luxury apartment with a skyline view of tokyo, plants + , decoration + , cozy + , night, hd, photography, scenery, neon lights, cinematic shot, post edited",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/32.png",
    prompt: "modern luxury apartment with a skyline view of tokyo, plants + , decoration + , cozy + , night, hd, photography, scenery, neon lights, cinematic shot, post edited",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/31.png",
    prompt: "3d isometric greek city, octane render, isometric + , voxel style + , highly detailed, hd, 8k",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/30.png",
    prompt: "3d isometric chinatown in spring, octane render + , isometric + , voxel style + , highly detailed + , hd, 8k",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/29.png",
    prompt: "3d isometric chinatown in spring, octane render + , isometric + , voxel style + , highly detailed + , hd, 8k",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/49.png",
    prompt: "abstract 3d render, rococo, octane render, detailed",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/28.png",
    prompt: "isometric holographic 3d blueprint of a futuristic city, blue",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/27.png",
    prompt: "isometric holographic 3d blueprint of a futuristic city, blue",
    date: "14.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/26.png",
    prompt: "fluffy cute fox person in the distance with cotton clothing in snowy mountains, pixar style, beautiful scenery, wide angle shot + , highly detailed",
    date: "13.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/25.png",
    prompt: "fluffy cute fox person in the distance with cotton clothing in snowy mountains, pixar style, beautiful scenery, wide angle shot + , highly detailed",
    date: "13.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/24.png",
    prompt: "nebula, galaxy, space, fractal, highly detailed, high contrast colors, abstract, rococo, hyperrealistic, 8k, multidimensional glowing paper cut craft",
    date: "12.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/23.png",
    prompt: "nebula, galaxy, space, fractal, highly detailed, high contrast colors, abstract, rococo, hyperrealistic, 8k, multidimensional glowing paper cut craft",
    date: "12.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/22.png",
    prompt: "nebula, galaxy, space, color splash + , paper cut art + , fractal, highly detailed, high contrast colors, abstract, rococo, hyperrealistic, 8k",
    date: "13.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/21.png",
    prompt: "nebula, galaxy, space, color splash + , paper cut art + , fractal, highly detailed, high contrast colors, abstract, rococo, hyperrealistic, 8k",
    date: "13.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/20.png",
    prompt: "greek temple and pillars background, greek sculpture of a masculine chiseled male in the middle + , marble sculpture + , beautiful male sculpture + , perfect lighting, photorealistic, wide angle shot, clouds, sky",
    date: "12.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/19.png",
    prompt: "marble sculpture of zeus holding a thunderbolt, greek god, highly detailedy, perfect lighting",
    date: "12.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/18.png",
    prompt: "marble sculpture of poseidon holding a trident, greek god, highly detailedy, perfect lighting",
    date: "12.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/17.png",
    prompt: "9 tailed fox, angry eyes, smoke from nose, art illustration, art by chun lo + , highly detailed, wide angle, distant camera, scene shot",
    date: "12.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/16.png",
    prompt: "9 tailed fox, angry eyes, smoke from nose, art illustration, art by chun lo + , highly detailed, wide angle, distant camera, scene shot",
    date: "12.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/15.png",
    prompt: "futuristic cyberpunk city from top view, octane render, 3d, highly detailed, photorealism",
    date: "12.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/14.png",
    prompt: "pixel art cyberpunk city, night, rain",
    date: "12.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/13.png",
    prompt: "dragon with around a japanese shrine + multi dimensional glowing paper cut craft + paper illustration + ornate + detailed + perfect lighting + , jungle of bamboo in the background",
    date: "11.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/12.png",
    prompt: "dragon with around a japanese shrine + multi dimensional glowing paper cut craft + paper illustration + ornate + detailed + perfect lighting + , jungle of bamboo in the background",
    date: "11.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/51.png",
    prompt: "abstract 3d render, rococo, octane render, detailed",
    date: "17.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/11.png",
    prompt: "dragon with around a japanese shrine + multi dimensional glowing paper cut craft + paper illustration + ornate + detailed + perfect lighting + , jungle of bamboo in the background",
    date: "11.11.2022",
    tags: "scenery"
  },{
    url: "https://assets.codepen.io/1692350/10.png",
    prompt: "dragon with around a japanese shrine + multi dimensional glowing paper cut craft + paper illustration + ornate + detailed + perfect lighting + , jungle of bamboo in the background",
    date: "11.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/9.png",
    prompt: "dragon with around a japanese shrine + multi dimensional glowing paper cut craft + paper illustration + ornate + detailed + perfect lighting + , jungle of bamboo in the background",
    date: "11.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/8.png",
    prompt: "mel medarda from acrana, beautiful dark skin woman, golden headpiece and earrings, beautiful white dress with golden accesoirs, greek marble pillars in background",
    date: "10.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/7.png",
    prompt: "unreal engine, cyberpunk samurai girl, beautiful face, perfect lighting, oni mask, 8k, detailed, bloom, hdr, ambient occolusion, green and yellow colors",
    date: "10.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/6.png",
    prompt: "unreal engine, cyberpunk samurai girl, beautiful face, perfect lighting, oni mask, 8k, detailed, bloom, hdr, ambient occolusion, green and yellow colors",
    date: "10.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/5.png",
    prompt: "galaxy with nebulas inside a fish glass bowl filled with water, water bubbles, reflective water bubbles, galaxy, nebula, beautiful, yellow, orange, red, 3d, bloom, occlusion, beautiful lighting, 8k, highly detailed, hyperreal, octane render, hdr, long exposure, realistic",
    date: "09.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/4.png",
    prompt: "galaxy with nebulas inside a fish glass bowl filled with water, water bubbles, reflective water bubbles, galaxy, nebula, beautiful, yellow, orange, red, 3d, bloom, occlusion, beautiful lighting, 8k, highly detailed, hyperreal, octane render, hdr, long exposure, realistic",
    date: "09.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/2.png",
    prompt: "ancient goddess, detailed skin pores, glowing tribal tattoos, golden clothing accesoires, fur clothing, magic staff, standing in a magic forest, blue and green theme, global illumination, photorealistic, bloom, hdr, 8k",
    date: "08.11.2022",
    tags: "characters"
  },{
    url: "https://assets.codepen.io/1692350/3.png",
    prompt: "futuristic jungle city in an aquarium on a vintage table, detailed water, water bubbles, fish, octane, 3d render, cinema4d, hdr, global illumination, ambient occolusion, highly detailed, 8k",
    date: "08.11.2022",
    tags: "abstract"
  },{
    url: "https://assets.codepen.io/1692350/1.png",
    prompt: "futuristic jungle city in an aquarium on a vintage table, detailed water, water bubbles, fish, octane, 3d render, cinema4d, hdr, global illumination, ambient occolusion, highly detailed, 8k",
    date: "08.11.2022",
    tags: "abstract"
  }
];


$(document).ready(function(){
  // SHUFFLE THE GALLERY
  shuffle(xgallery_images);

  // LOAD IMAGES INTO GALLERY
  xgallery_images.forEach(function(xg_image, i){
    $(".xg-container").append(createXGImage(xg_image, i));
  });

  // HOVER GALLERY IMAGE
  $(".xg-img-wrap").mouseenter(function(){
    var el = $(this);
    var to = setTimeout(function(){
      el.find(".xg-img-info").addClass("xg-img-info-open");
    }, 100);
    el.mouseleave(function(){
      clearInterval(to);
      el.find(".xg-img-info").removeClass("xg-img-info-open");
    });
  });


  // FILTER BUTTON CLICK
  $(".xg-btn-tag").on("click", function(){
    if($(this).hasClass("xg-btn-active")){
      return;
    }
    var tagFilter = $(this).data("tag");
    $(".xg-btn-tag").removeClass("xg-btn-active");
    $(this).addClass("xg-btn-active");

    $(".xg-loader").fadeIn(100);

    if(tagFilter == "all"){
      $(".xg-img-wrap").fadeIn(100);
    }else{
      $(".xg-img-wrap").fadeIn(100);
      $(".xg-img-wrap").each(function(i, el){
        if(!$(el).data("tags").includes(tagFilter))
          $(el).fadeOut(100);
      });
    }
    $(".xg-loader").delay(500).fadeOut(100);
  });



  // OPEN IMAGE PREVIEW
  $(".xg-img-wrap").on("click", function(){
    var id = $(this).data("index");

    $("body").addClass("scroll-fixed");

    $(".xg-img-preview").fadeIn(100);
    $(".xg-img-preview").html(createXGImagePreview(xgallery_images[id]));
  });


  // ZOOM IN IMAGE PREVIEW
  $(document).on("click", ".xgp-img", function(){
    $(".xgp-close").toggleClass("x-cloak");
    $(this).closest(".xgp-img-inner").siblings(".xgp-details").fadeToggle(100);
    $(this).closest(".xgp-img-inner").toggleClass("xgp-zoomed-inner");
    $(this).toggleClass("xgp-zoomed");
    $(".xgp-wrap").toggleClass("xg-overflow");
  });


  // CLOSE PREVIEW - ESCAPE
  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      $("body").removeClass("scroll-fixed");

      $(".xg-img-preview").fadeOut(100);
    }
  });



  // Gallery section 2
  const container = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const n = slides.length;
const angle = 360 / n;

let setId = 0;
let deg = [];
let x = 0;
let y = 0;

const touchDevice = () => ('ontouchstart' in document.documentElement);
const setTransition = (time) => {
  let i = 0;
  for (; i < n; i++) slides[i].style.transition = `all ${time}s`;
}
const positionSlides = () => {
  const r = container.offsetWidth / 2;
  let i = 0;
  
  setTransition('0');
  
  for (; i < n; i++) {
    deg[i] = i * angle;
    x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
    y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;
    
    slides[i].style.top = `${~~y}px`;
    slides[i].style.left = `${~~x}px`;
  }
  
  setTimeout(() => {
    setTransition('.3');
  }, 10);
}
const prevSlide = () => {
  let i = 0;
  for (; i < n; i++) deg[i] -= angle;
  animateSlide();
}
const nextSlide = () => {
  let i = 0;
  for (; i < n; i++) deg[i] += angle;
  animateSlide();
}
const animateSlide = () => {
  const r = container.offsetWidth / 2;
  let i = 0;
  
  for (; i < n; i++) {
    x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
    y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;
    
    slides[i].style.top = `${~~y}px`;
    slides[i].style.left = `${~~x}px`;
    
    y === 0 ? slides[i].classList.add('active') : slides[i].classList.remove('active');
  }
  
  const activeSlide = document.querySelector('.slide.active');
  const slideBgImg = getComputedStyle(activeSlide).backgroundImage;
  
  container.style.backgroundImage = slideBgImg;
}
const autoPlay = () => setId = setInterval(nextSlide, 3000);
const changeSlideImg = (e) => {
  let i = 0;
  for (; i < n; i++) slides[i].classList.remove('active');
  e.currentTarget.classList.add('active');

  const activeSlide = document.querySelector('.slide.active');
  const slideBgImg = getComputedStyle(activeSlide).backgroundImage;

  container.style.backgroundImage = slideBgImg;
}

positionSlides();
nextSlide();
autoPlay();

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);
btns.forEach(btn => {
  btn.addEventListener('mouseenter', () => clearInterval(setId));
  btn.addEventListener('mouseleave', () => {
    clearInterval(setId);
    autoPlay();
  });
})
slides.forEach(slide => {
  if (touchDevice()) {
    slide.addEventListener('click', (e) => {
      changeSlideImg(e);
      clearInterval(setId);
      autoPlay();
    });
  }
  else {
    slide.addEventListener('mouseenter', (e) => {
      changeSlideImg(e);
      clearInterval(setId);
    });
    slide.addEventListener('mouseleave', () => {
      clearInterval(setId);
      autoPlay();
    });
  }
})
window.addEventListener('resize', () => {
  clearInterval(setId);
  positionSlides();
  autoPlay();
})  



  // CLOSE PREVIEW - CLICK
  $(document).on("click", ".xgp-close", function(e) {
    $("body").removeClass("scroll-fixed");

    $(".xg-img-preview").fadeOut(100);
  });
});



function createXGImagePreview(xgi){
  var xg_img =
      '<div class="xgp-wrap">\
<div class="xgp-close"></div>\
<div class="xgp-img-inner">\
<img draggable="false" class="xgp-img" src="'+xgi.url+'">\
</div>\
<div class="xgp-details">\
<div class="xgp-prompt">'+xgi.prompt+'</div>\
<div class="xgp-date">'+xgi.date+'</div>\
<div class="xgp-tags">\
<div class="xgp-tag">'+xgi.tags+'</div>\
</div>\
</div>';

  return xg_img;
}

function createXGImage(xgi, i){
  var xg_img =
      '<div class="xg-img-wrap" data-tags="'+xgi.tags+'" data-index="'+i+'">\
<div class="xg-img-info">\
<div class="xg-img-info-inner">\
<div class="xg-img-prompt">'+xgi.prompt+'</div>\
<div class="xg-img-date">'+xgi.date+'</div>\
</div>\
</div>\
<img draggable="false" class="xg-img" src="'+xgi.url+'">\
</div>';

  return xg_img;
}


function shuffle(arr) {
  let index = arr.length,  randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;

    [arr[index], arr[randomIndex]] = [
      arr[randomIndex], arr[index]];
  }

  return arr;
}
