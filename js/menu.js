"use strict" // writes in the console if there is a mistake due to something is not defined
let burgermenu = document.querySelector(".burgerbutton");
let navbarBig = document.querySelector(".navbarBig");
let navbarSmall = document.querySelector(".navbarSmall");
let burgermenuMob = document.querySelector(".burgerbuttonMob");


burgermenuMob.addEventListener('click', openSmallMenu);
burgermenu.addEventListener('click', openMenu);


function openMenu(){
    burgermenu.classList.toggle('active');
    console.log("something happened");
    navbarBig.classList.toggle('enabled');
}


function openSmallMenu(){
    burgermenuMob.classList.toggle('active');
    navbarSmall.classList.toggle('show');

}
