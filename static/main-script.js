document.getElementById("hoverText").addEventListener("mouseenter", function() {
    var hoverText = document.getElementById("hoverText");
    var redText = document.getElementById("redText");

    var rect = hoverText.getBoundingClientRect();
    redText.style.left = (rect.left + (rect.width / 2) - (redText.offsetWidth / 2)) + "px";
    redText.style.top = (rect.top - redText.offsetHeight) + "px";
    
    // Force reflow to ensure the changes are applied
    redText.offsetHeight; 
    
    redText.style.opacity = "1";
    redText.style.transform = "translateY(0)";
});

document.getElementById("hoverText").addEventListener("mouseleave", function() {
    var redText = document.getElementById("redText");
    redText.style.opacity = "0";
    redText.style.transform = "translateY(-10px)";
});
