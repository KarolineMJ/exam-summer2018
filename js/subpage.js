"use strict" // writes in the console if there is a mistake due to something is not defined
let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);

fetch("http://www.kmjdesign.dk/m2/wordpress/wp-json/wp/v2/furniture/" + id + "?_embed") //embed giver alle detaljer på billedet - Author, images osv.


    .then(e => e.json())
    .then(showOneFurniture)

function showOneFurniture(aChair) {
    console.log(aChair);
    document.querySelector(".topImg").setAttribute("src", aChair.acf["top-image"].sizes.large);
    document.querySelector(".firstSquareImg").setAttribute("src", aChair.acf["first-square-image"].sizes.large);
    document.querySelector(".rightWord").textContent = aChair.acf["left-word"];

    document.querySelector(".secondSquareImg").setAttribute("src", aChair.acf["second-square-image"].sizes.large);
    document.querySelector(".sideImg").setAttribute("src", aChair.acf["image-side"].sizes.large);

    document.querySelector(".furnitureTitle").textContent = aChair.title.rendered;

    document.querySelector(".furnitureYear").textContent = aChair.acf.year;

    document.querySelector(".leftWord").textContent = aChair.acf["word-right"];
    document.querySelector(".furnitureDesc").innerHTML = aChair.content.rendered;

    //get photographer

    if (aChair.acf.photographer) {
        document.querySelector(".furnitureGraph span").textContent = aChair.acf.photographer;

    } else {
        document.querySelector(".furnitureGraph").remove()
    }



    //get optional image 1


    if (aChair.acf["optional_image_1"]) {
        document.querySelector(".optionalImage1").setAttribute("src", aChair.acf["optional_image_1"].sizes.large);

    } else {
        document.querySelector(".optionalImage1").remove()
    }


    //get optional image 2
    if (aChair.acf["optional_image_2"]) {
        document.querySelector(".optionalImage2").setAttribute("src", aChair.acf["optional_image_2"].sizes.large);

    } else {
        document.querySelector(".optionalImage2").remove()
    }


}

function goBack() {
    window.history.back();
}
