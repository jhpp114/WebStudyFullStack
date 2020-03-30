const TITLE = document.querySelector('#title');
const CLICKED_CLASS = "clicked";

function handleClick() {
    let currentClass = TITLE.className;
    console.log(currentClass);
    if (!TITLE.classList.contains(CLICKED_CLASS)) {
        TITLE.classList.add(CLICKED_CLASS);
    } else {
        TITLE.classList.remove(CLICKED_CLASS);
    }
}

const clockContainer = document.querySelector('.clockContainer');
const myClock = clockContainer.querySelector('h3');

function getTime() {    
    let myTime = new Date();
    let hour = myTime.getHours();
    let miniute = myTime.getMinutes();
    let second = myTime.getSeconds();
    if (hour > 12) {
        hour -= 12;
        if (miniute < 10) {
            miniute = '0' + miniute;
            if (second < 10) {
                second = '0' + second;
            }
        } 
        myClock.innerHTML = `${hour}:${miniute}:${second} PM`;
    } else {
        if (miniute < 10) {
            miniute = '0' + miniute;
            if (second < 10) {
                second = '0' + second;
            }
        } 
        myClock.innerHTML = `${hour}:${miniute}:${second} AM`;
    }
}

let name = document.querySelector('.userName');

function init() {
    TITLE.addEventListener('click', handleClick);
    setInterval(getTime, 1000)
}

init();