var appButtonVideo = document.querySelector('.button-video');
var appButtonFeatures = document.querySelector('.button-features');
var appButtonView = document.querySelector('.button-view-pricing');
var appButtonRead = document.querySelector('.button-read-documentation');

appButtonVideo.onmouseover = function () {
    appButtonVideo.classList.add('button-app-active');
}

appButtonVideo.onmouseout = function () {
    appButtonVideo.classList.remove('button-app-active');
}

appButtonFeatures.onmouseover = function () {
    appButtonFeatures.classList.add('button-app-active');
}

appButtonFeatures.onmouseout = function () {
    appButtonFeatures.classList.remove('button-app-active');
}

appButtonView.onmouseover = function () {
    appButtonView.classList.add('button-get-started-active');
}

appButtonView.onmouseout = function () {
    appButtonView.classList.remove('button-get-started-active');
}

appButtonRead.onmouseover = function () {
    appButtonRead.classList.add('button-get-started-active');
}

appButtonRead.onmouseout = function () {
    appButtonRead.classList.remove('button-get-started-active');
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

var slideIndexNew = 1;
showSlidesNew(slideIndexNew);

// Next/previous controls
function plusSlidesNew(n) {
    showSlidesNew(slideIndexNew += n);
}

// Thumbnail image controls
function currentSlideNew(n) {
    showSlidesNew(slideIndexNew = n);
}

function showSlidesNew(n) {
    var i;
    var slidesNew = document.getElementsByClassName("my-slides-2");
    var dotsNew = document.getElementsByClassName("dot-2");
    if (n > slidesNew.length) {slideIndexNew = 1}
    if (n < 1) {slideIndexNew = slidesNew.length}
for (i = 0; i < slidesNew.length; i++) {
    slidesNew[i].style.display = "none";
}
for (i = 0; i < dotsNew.length; i++) {
    dotsNew[i].className = dotsNew[i].className.replace(" active", "");
}
slidesNew[slideIndexNew-1].style.display = "flex";
dotsNew[slideIndexNew-1].className += " active";
}

const accordions = document.querySelectorAll('.accordion-item');

for (item of accordions) {
    item.addEventListener('click', function() {
        if(this.classList.contains('able')) {
            this.classList.remove('able');
        } else {
            for (el of accordions) {
                el.classList.remove('able');
            }
            this.classList.add('able');
        }
        }
    )
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}
