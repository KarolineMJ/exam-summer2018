"use strict" // writes in the console if there is a mistake due to something is not defined
let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);

fetch("http://www.kmjdesign.dk/m2/wordpress/wp-json/wp/v2/furniture/"+id+"?_embed") //embed giver alle detaljer på billedet - Author, images osv.
    .then(e=> e.json())
    .then(showOneFurniture)

function showOneFurniture(aChair){
    console.log(aChair);
    document.querySelector(".topImg").setAttribute("src", aChair.acf["top-image"].sizes.large);
    document.querySelector(".firstSquareImg").setAttribute("src", aChair.acf["first-square-image"].sizes.large);
    document.querySelector(".secondSquareImg").setAttribute("src", aChair.acf["second-square-image"].sizes.large);
    document.querySelector(".sideImg").setAttribute("src", aChair.acf["image-side"].sizes.large);

    document.querySelector(".furnitureTitle").textContent=aChair.title.rendered;
    document.querySelector(".leftWord").textContent=aChair.acf["left-word"];
    document.querySelector(".rightWord").textContent=aChair.acf["word-right"];
    document.querySelector(".furnitureDesc").innerHTML=aChair.content.rendered;


}
