let burgermenu = document.querySelector(".burgerbutton");
let navbarBig = document.querySelector(".navbarBig");

burgermenu.addEventListener('click', openMenu);


function openMenu(){
    burgermenu.classList.toggle('active');
    console.log("something happened");
    navbarBig.classList.toggle('enabled');
}

