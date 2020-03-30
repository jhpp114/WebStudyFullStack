function changeBackgroundColor() {
    let myBody = document.querySelector('body');
    let isBlue = false;
    setInterval(function() {
        if (isBlue) {
            myBody.style.backgroundColor = "white";
        } else {
            myBody.style.backgroundColor = "#3499db";
        }
        isBlue = !isBlue;
    }, 3000);
}

function changeH1Color() {
    let myH1 = document.querySelector('h1');
    myH1.style.color = "pink";
}

function getPDifferentWays() {
    let p1 = document.getElementById('first');
    p1.textContent = "Change P1";
    let p2 = document.getElementsByClassName('special');
    // accessed
    p2[1].textContent = "Change P2";
    let p3 = document.getElementsByTagName('p');
    p3[2].textContent = "Changed P3";
    let p4 = document.querySelector('#last');
    p4.textContent = "Changed P4";
}

function init() {
    changeH1Color();
    changeBackgroundColor();
    getPDifferentWays();
}
init();