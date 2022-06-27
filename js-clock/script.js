function displayClock() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let time = h + ":" + m + ":" + s;
  document.getElementById("time").innerHTML = time;
}
setInterval(displayClock, 100);

const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = dayName[day] + ", " + monthName[month] + " " + year;
