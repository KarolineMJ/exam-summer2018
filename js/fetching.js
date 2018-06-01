"use strict" // writes in the console if there is a mistake due to something is not defined
let templateWork = document.querySelector(".workTemp").content;
let billedeBlok = document.querySelector(".billedeBlok");

let furniture = document.querySelector("#furnitures");
let page = 1;
let lookingForData = false;




function fetchFunitures() {
    lookingForData = true;

    let urlParams = new URLSearchParams(window.location.search); //shows the id in the url

    let catid = urlParams.get("");

    let endpoint = "http://www.kmjdesign.dk/m2/wordpress/wp-json/wp/v2/furniture/?_embed&per_page=30"

    fetch(endpoint)
        .then(e => e.json())
        .then(showFurnitures)
}

function showFurnitures(data) {
    console.log(data);
    lookingForData = false;
    data.forEach(showFurniture);
}


function showFurniture(aFurniture) {
    console.log("something")
    let clone = templateWork.cloneNode(true);

    //get title
    clone.querySelector(".productTitle").innerHTML = aFurniture.title.rendered;
    clone.querySelector(".text").innerHTML = aFurniture.title.rendered;

    //get images
    if (aFurniture.acf["product-page-image"]) {
        const img = clone.querySelector("img");
        img.setAttribute("src", aFurniture.acf["product-page-image"].sizes.large);

        img.addEventListener("load", (e) => {
            const image = e.target;
            console.log("height", image.height, image.parentElement);
            img.onmouseover = function () {
                mouseOver()
            };

            function mouseOver() {
                img.classList.add("overlay");
            }

            if (image.width < image.height) {
                image.parentElement.classList.add("vertical");
                image.classList.add("verticalPic");
            } else {
                image.parentElement.classList.add("horizontal");
                image.classList.add("horizontalPic");

            }
        });

    } else {
        clone.querySelector("img").remove()
    }




    //get detailed product page

    clone.querySelector('.seeMore').href = "detailed-work.html?id=" + aFurniture.id;
    billedeBlok.appendChild(clone);

    let frontImages = document.querySelectorAll(".productPic");




    /*
            frontImages.forEach(frontImage =>{
            if (frontImage.width < frontImage.height) {
                frontImage.parentElement.classList.add("vertical");
            } else{
                frontImage.parentElement.classList.add("horizontal");
            }
            });

            */
}

fetchFunitures();
