function getTime() {
    let myTime = new Date();
    let myHour = myTime.getHours();
    let myMinute = myTime.getMinutes();
    let mySecond = myTime.getSeconds();
    printTime(myHour, myMinute, mySecond);
}

function printTime(hour, min, sec) {
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }
    const timerDiv = document.querySelector('.currentTime');

    let myTimer = '';
    myTimer = `${hour} : ${min} : ${sec}`;
    timerDiv.innerText = myTimer;
}

setInterval(getTime, 1000);