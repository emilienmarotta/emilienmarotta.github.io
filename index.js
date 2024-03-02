document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});


window.addEventListener('load', function() {
    
    setTimeout(function() {
        
        document.body.classList.add('loaded');
    
    }, 0);

});

const typingSpeed = 30; // ms

const mainBoxTitleText = document.getElementById("main-box-title-text");

function typeText(htmlElement, text, charIndex) {
    if (charIndex < text.length) {
        htmlElement.classList.add("cursor-blink");
        if (charIndex < 8) {
            htmlElement.innerHTML += '<span class="blue-word">' + text.charAt(charIndex) + '</span>';
        } else {
            htmlElement.classList.add("cursor-blink");
            htmlElement.innerHTML += text.charAt(charIndex);
        }
        charIndex++;
        setTimeout(() => typeText(htmlElement, text, charIndex), typingSpeed);
    } else {
        setTimeout(() => htmlElement.classList.remove("cursor-blink"), 0);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    
    if (window.innerWidth < 420) {
        mainBoxTitleText.innerHTML = '<span class="blue-word">BONJOUR,</span> Je suis<br>Emilien Marotta !';
    } else {
        mainBoxTitleText.innerHTML = 'Test';
    }
    
    const angle1 = document.getElementById("angle1");
    const angle2 = document.getElementById("angle2");
    
    setTimeout( () => {
        
        angle1.style.transform = "translate(0, 0)";
        angle2.style.transform = "translate(0, 0)";
        
    }, 1500);

});

const upButton = document.getElementById("up-button");

upButton.addEventListener("touchstart", () => {

    upButton.src = "Index/arrow2.png";

});

upButton.addEventListener("touchend", () => {

    upButton.src = "Index/arrow.png";

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

let mainBoxTitle = document.getElementById("main-box-title-text");

function addReturnToLine () {
    let screenWidth = window.innerWidth;
    if (screenWidth < 420) {
        mainBoxTitle.innerHTML = '<span class="blue-word">Bonjour,</span> Je suis<br>Emilien Marotta !';
    } else {
        mainBoxTitle.innerHTML = '<span class="blue-word">Bonjour,</span> Je suis Emilien Marotta !';
    }
}


window.addEventListener('resize', () => {
    addReturnToLine();
});