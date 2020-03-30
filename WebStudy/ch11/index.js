let clock = () => {
    const fullTime = new Date();
    let hour = fullTime.getHours();
    let minutes = fullTime.getMinutes();
    let seconds = fullTime.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let myHour = document.getElementById('hour');
    myHour.innerText = hour;

    let myMinutes = document.getElementById('miniute');
    myMinutes.innerText = ":" + minutes;

    let mySecond = document.getElementById('second');
    mySecond.innerText = ":" + seconds;

}
setInterval(clock, 500);