document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});


window.addEventListener('load', function() {
    
    setTimeout(function() {
        
        document.body.classList.add('loaded');
    
    }, 0);

});

document.addEventListener("DOMContentLoaded", function() {
    
    const angle1 = document.getElementById("angle1");
    const angle2 = document.getElementById("angle2");

    setTimeout( () => {

        angle1.style.transform = "translate(0, 0)";
        angle2.style.transform = "translate(0, 0)";
    
    }, 1500);

});

const upButton = document.getElementById("up-button");

upButton.addEventListener("touchstart", () => {

    upButton.src = "../Index/arrow2.png";

});

upButton.addEventListener("touchend", () => {

    upButton.src = "../Index/arrow.png";

});


const scrollToTopButton = document.getElementById("up-button");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        scrollToTopButton.classList.add("visible");

    } else {

        scrollToTopButton.classList.remove("visible");

    }

});

scrollToTopButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});