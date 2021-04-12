const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const itemsh4 = document.querySelectorAll('.deadline-format h4');
const futurePara = document.getElementById('futurepara');


let futureDate = new Date(2021,4,7,00,00,00);
const year = futureDate.getFullYear();
const hours = (futureDate.getHours() +24)%12||12;
let minutes = (futureDate.getMinutes() +60)%60;
if(minutes < 10) {
  minutes = "0"+minutes;
}

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `project ends on ${weekday}, ${date}, ${month}, 
${year}  ${hours}:${minutes}am`

//futureDate in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  
  const differenceTime = futureTime - today;
  

  const oneDay = 24 * 60 *60 *1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let daysRemaining = differenceTime / oneDay;
  daysRemaining = Math.floor(daysRemaining);

  let hoursRemaining = Math.floor((differenceTime % oneDay) / oneHour);
  let minutesRemaining = Math.floor((differenceTime % oneHour) / oneMinute);

  let secondsRemaining = Math.floor((differenceTime % oneMinute) / 1000);

  // set values array

  const values = [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining];

  function format(item) {
    if(item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  itemsh4.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });

  if(differenceTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Project is complete </h4>`

    futurePara.innerHTML = "Up next, some backend projects. Stay Tuned..."
  }
  
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
