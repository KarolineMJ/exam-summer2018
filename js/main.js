let burgermenu = document.querySelector(".burgerbutton");
let navbarBig = document.querySelector(".navbarBig");

let burgermenuMob = document.querySelector(".burgerbuttonMob");


burgermenuMob.addEventListener('click', openMenu);
burgermenu.addEventListener('click', openMenu);


function openMenu(){
    burgermenuMob.classList.toggle('active');
    burgermenu.classList.toggle('active');
    console.log("something happened");
    navbarBig.classList.toggle('enabled');
}

