let slideIndex = 0;
showSlides();

function showSlides(data) {
    console.log(data)
    let slides = document.querySelectorAll(".mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds



}
