"use strict";
let imgs = document.querySelectorAll(".gallery .gallery__wrap .imgs img");

let next = document.querySelector(".gallery .gallery__wrap .next");

let prev = document.querySelector(".gallery .gallery__wrap .prev");

let current_slide = 0;


next.addEventListener("click", function() {
    imgs[current_slide].computedStyleMap.opacity = 0;
})

next.addEventListener("click", function() {
    imgs[current_slide].style.opacity= 0;
    if(current_slide == imgs.length-1) {
        current_slide = 0
    }else {
        current_slide++;
    }
    imgs[current_slide].style.opacity = 1;
})

prev.addEventListener("click", function() {
    imgs[current_slide].style.opacity = 0;
    if(current_slide == 0) {
        current_slide = imgs.length-1
    } else {
        current_slide--;
    }
    imgs[current_slide].style.opacity = 1;
})