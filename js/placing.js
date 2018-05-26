"use strict" //skriver fejl hvis der er en ting der ikke er defineret
let frontImages = document.querySelectorAll("img");

let imgHeight = frontImages.height;
let imgWidth = frontImages.width;

frontImages.forEach(frontImage =>{
    console.log("something happened to the picture");
    if(imgWidth < imgHeight){
        frontImages.classList.add("horizontal");
        }
});
