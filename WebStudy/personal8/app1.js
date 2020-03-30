function changeBackground() {
    let btn = document.querySelector("button");
    let background = document.querySelector("div");
    background.style.width = "500px";
    background.style.height = "500px";
    let isFilled = false;
    let colorWhite = "white";
    let colorPurple = "purple";
    
    btn.addEventListener("click", function(){
        if (isFilled) {
            background.style.background = colorWhite;
        } else {
            background.style.background = colorPurple;
        }
        isFilled = !isFilled;
    });
    
}

function init() {
    changeBackground();
}

init();