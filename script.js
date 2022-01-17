$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
          
        }else{
            $('.navbar').removeClass("sticky");
            
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "informal~lensman", "Emotion reader ", "Secuity advisor","Musicophile"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "informal~lensman", "Emotion reader ", "Secuity advisor","Musicophile"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

var c = document.getElementById("logo");

var ctx = c.getContext("2d");
var ctx1 = c.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "#BF700F");
gradient.addColorStop("0.4", "#BF820F");
gradient.addColorStop("0.7", "red");
ctx.font = "bold 50px sans-serif";
ctx.strokeStyle = gradient;
ctx.strokeText("~Ar.T~", 9, 37);
ctx.font = "bold 30px sans-serif";
ctx.fillStyle = gradient;
ctx.fillText(" _________ ", 9, 38);
ctx.textBaseline = "top";
//same variable 2 values
gradient.addColorStop("0.7", "#BF700F");
gradient.addColorStop("0.4", "#BF820F");
gradient.addColorStop("0", "#004D73");
ctx1.font = "small-caps 15px Courier New";
ctx1.fillStyle = gradient;
ctx1.fillText("A r p a n  T h o m a s", 5, 49);
ctx.textBaseline = "Hanging";

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  



  var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
