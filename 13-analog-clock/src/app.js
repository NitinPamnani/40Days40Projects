document.addEventListener('DOMContentLoaded', startTimer);

let canvas = document.querySelector("#clock");
let context = canvas.getContext("2d");

let clockRadius = 100;

let clockX = canvas.width/2;
let clockY = canvas.height/2;

//Math here
Math.TAU = 2 * Math.PI;
function startTimer() {
    displayNumbers();
    setInterval(displayTime, 1000);
    displayTime();
}

function displayNumbers(){
    let i = 12;
    context.strokeStyle = "black";
    context.lineWidth = 2;

    while(i > 0) {


        let angle = (i * 30) * Math.PI/180;

        i--;
    }
}

function displayTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let timeString = formatHour(hour) +":" + padZero(minutes) + ":" + padZero(seconds)+" "+getTimePeriod(hour);
    document.querySelector("#current-time").innerHTML = timeString;

    //Analog clock





function drawArm(progress, armThickness, armLength, armColor) {
    let armRadians = (Math.TAU * progress) - (Math.TAU/4);

    let targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);

    let targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);

    context.lineWidth = armThickness;
    context.strokeStyle = armColor;

    context.beginPath();
    context.moveTo(clockX, clockY);
    context.lineTo(targetX, targetY);
    context.stroke();
}

context.clearRect(0,0, canvas.width, canvas.height);
drawArm( hour / 12, 10, 0.60, '#000000' );
drawArm(minutes / 60, 4,  0.75, '#000000');
drawArm(seconds/ 60, 2,  1.00, '#FF0000');

}

function padZero(num) {
    if(num < 10) {
        return `0${num}`;
    } else {
        return `${num}`;
    }
}

function formatHour(hour) {
    let formattedHour = hour % 12;

    if(formattedHour == 0) {
        formattedHour = 12;
    }

    return String(formattedHour);
}

function getTimePeriod(hour) {
    return (hour < 12)?"AM":"PM";
}