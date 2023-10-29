
const typingSpeed = 30; // ms

const mainBoxTitleText = document.getElementById("main-box-title-text");

function typeText(htmlElement, text, charIndex) {
    if (charIndex < text.length) {
        htmlElement.classList.add("cursor-blink");
        if (charIndex < 6) {
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

typeText(mainBoxTitleText, "Hello, I am Emilien Marotta!", 0);

document.addEventListener("DOMContentLoaded", function() {
    
    const angle1 = document.getElementById("angle1");
    const angle2 = document.getElementById("angle2");

    setTimeout( () => {

        angle1.style.transform = "translate(0, 0)";
        angle2.style.transform = "translate(0, 0)";
    
    }, 500);

});

function instagramMouseOver() {
    document.getElementById("instagram").src = "Index/instagram2.png";
}

function instagramMouseOut() {
    document.getElementById("instagram").src = "Index/instagram.png";
}

function linkedinMouseOver() {
    document.getElementById("linkedin").src = "Index/linkedin2.png";
}

function linkedinMouseOut() {
    document.getElementById("linkedin").src = "Index/linkedin.png";
}

function arrowMouseOver() {
    document.getElementById("arrow").src = "Index/arrow2.png";
}

function arrowMouseOut() {
    document.getElementById("arrow").src = "Index/arrow.png";
}

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