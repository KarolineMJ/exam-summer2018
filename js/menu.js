"use strict" // writes in the console if there is a mistake due to something is not defined
let burgermenu = document.querySelector(".burgerbutton");
let navbarBig = document.querySelector(".navbarBig");
let navbarSmall = document.querySelector(".navbarSmall");
let burgermenuMob = document.querySelector(".burgerbuttonMob");


burgermenuMob.addEventListener('click', openSmallMenu);
burgermenu.addEventListener('click', openMenu);


function openMenu() {
    burgermenu.classList.toggle('active');
    console.log("something happened");
    navbarBig.classList.toggle('enabled');
}


function openSmallMenu() {
    burgermenuMob.classList.toggle('active');
    navbarSmall.classList.toggle('show');

}

//add background to nav while scrolling
window.onscroll = function () {
    console.log("background appears")
    let navScrollMob = document.querySelector('.containerMob');
    let navScrollWeb = document.querySelector('.containerWeb');
    if (window.pageYOffset > 100) {
        navScrollMob.classList.add("navScroll");
        navScrollWeb.classList.add("navScroll");

    } else {
        navScrollMob.classList.remove("navScroll");
        navScrollWeb.classList.remove("navScroll");
    }
}
