/*
{Group 2 Code Fair}

author: Group 2
website: {Code Fair}
Group 2: Dyllan, Joel, Rasmus
*/


////CountDown
//sets date
var countDownTo = new Date("Nov 10, 2017  00:00:00");

// update
var x = setInterval(function () {
  //gets current time and date
  var now = new Date().getTime();
  //time between
  var distance = countDownTo - now;
  //calculates
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //print
  document.getElementById("countdown").innerHTML = days + "d " + hours + ":" +
    minutes + ":" + seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "";
  }
}, 1000);
