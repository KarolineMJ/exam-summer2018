"use strict" // writes in the console if there is a mistake due to something is not defined
let templateWork = document.querySelector(".workTemp").content;

let furniture =  document.querySelector("#furnitures");
let page =1;
let lookingForData = false;




function fetchFunitures(){
    lookingForData=true;

    let urlParams = new URLSearchParams(window.location.search); //shows the id in the url

    let catid = urlParams.get("");

    let endpoint = "http://www.kmjdesign.dk/m2/wordpress/wp-json/wp/v2/furniture/?_embed&per_page=30"

    fetch(endpoint)
    .then(e => e.json())
    .then(showFurnitures)
}

function showFurnitures(data){
    console.log(data);
    lookingForData = false;
    data.forEach(showFurniture);
}

function showFurniture(aFurniture){
    console.log("something")
    let clone = templateWork.cloneNode(true);
    clone.querySelector("h2").textContent = aFurniture.title.rendered;

    if(aFurniture.acf["product-page-image"]){
        clone.querySelector("img").setAttribute("src", aFurniture.acf["product-page-image"].sizes.large)

        let frontImages = document.querySelectorAll("img");

        let imgHeight = frontImages.height;
        let imgWidth = frontImages.width;

        frontImages.forEach(frontImage =>{
        console.log("something happened to the picture");
        if(imgWidth < imgHeight){
            frontImage.classList.add("horizontal");
            }
        });
       }
    else{
        clone.querySelector("img").remove()
    }

clone.querySelector('.seeMore').href="detailed-work.html?id=" +aFurniture.id;
furniture.appendChild(clone);
}

fetchFunitures();



