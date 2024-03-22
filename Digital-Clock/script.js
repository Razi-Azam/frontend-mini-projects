function displayTime() {
    let currentDate = new Date();

    const [hour, minute, second] = [currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()];

    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minute');
    let seconds = document.getElementById('second');

    if(hour < 10) {
        hours.innerText = "0" + hour;
    }
    else
        hours.innerText = hour;

    if(minute < 10) {
        minutes.innerText = "0" + minute;
    }
    else
        minutes.innerText = minute;

    if(second < 10) {
        seconds.innerText = "0" + second;
    }
    else
        seconds.innerText = second;
    


    setInterval(displayTime, 1000);
}

displayTime();

