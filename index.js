document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    
    const angle1 = document.getElementById("angle1");
    const angle2 = document.getElementById("angle2");
    
    setTimeout( () => {
        
        angle1.style.transform = "translate(0, 0)";
        angle2.style.transform = "translate(0, 0)";
        
    }, 500);

});

