function terminal_disappear()
{
   //console.log("close");
   document.getElementById('terminal').style.display="none";
}
  function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
      total: time
    };
  }

//   function animateClock(span) {
//     span.className = "animate__flipOutY";
//     setTimeout(function () {
//       span.className = "";
//     }, 1000);
//   }

  function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
      var clock = document.getElementById(id);
      var timer = updateTimer(deadline);

      clock.innerHTML =
        "<span>" +
        timer.days +
        "</span>" +
        "<span>" +
        timer.hours +
        "</span>" +
        "<span>" +
        timer.minutes +
        "</span>" +
        "<span>" +
        timer.seconds +
        "</span>";

      //animation
    //   var spans = clock.getElementsByTagName("span");
    //   animateClock(spans[3]);
    //   if (timer.seconds == 59) animateClock(spans[2]);
    //   if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
    //   if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59)
    //     animateClock(spans[0]);

      //check for end of time
      if (timer.total < 1) {
        clearInterval(timerInterval);
        clock.innerHTML =
          "<span>0</span><span>0</span><span>0</span><span>0</span>";
      }
    }, 1000);
  }

  window.onload = function () {
    var deadline = new Date("October 30, 2020 00:00:00");
    startTimer("clock", deadline);

    var today = new Date();
    var aaj = today.getDate();
  var hr = today.getHours()
  console.log(hr)
    console.log(aaj)
    if (aaj>=9 && aaj<12){
    if(aaj === 11){
      if (hr < 19){
          document.getElementById("tochange").innerHTML = "Django 101,  Sept 11";
      }
      else{
        document.getElementById("tochange").innerHTML = "Frontend-Backend Integration, Sept 15"
      }
    }
      }
    if (aaj>=12 && aaj<16){
  if(aaj === 15){
      if (hr < 19){
          document.getElementById("tochange").innerHTML = "Frontend-Backend Integration, Sept 15";
      }
      else{
        document.getElementById("tochange").innerHTML = "Flutter Sept 18";
      }
  }else{
    document.getElementById("tochange").innerHTML = "Frontend-Backend Integration, Sept 15";
  }
    }
    if (aaj>=16 && aaj<19){
  if(aaj === 18){
      if (hr < 19){
          document.getElementById("tochange").innerHTML = "Flutter Sept 18";
      }
      else{
        document.getElementById("tochange").innerHTML = "ML Sept 22"
      }
  }else{
    document.getElementById("tochange").innerHTML = "Flutter Sept 18";
  }
    }
    if (aaj>=19 && aaj<23){
  if(aaj === 22){
      if (hr < 19){
          document.getElementById("tochange").innerHTML = "ML Sept 22"
      }
      else{
        document.getElementById("tochange").innerHTML = "Neural Networks Sept 25"
      }
  }else{
    document.getElementById("tochange").innerHTML = "ML Sept 22"
  }
    }
    if (aaj>=23 && aaj<26){
  if(aaj === 25){
      if (hr < 19){
          document.getElementById("tochange").innerHTML = "Neural Networks Sept 25"
      }
      else{
        document.getElementById("tochange").innerHTML = "ML model Sept 29"
      }
  }else{
    document.getElementById("tochange").innerHTML = "Neural Networks Sept 25"
  }
    }
    if (aaj>=26 && aaj<30){
  if(aaj === 29){
      if (hr < 19){
          document.getElementById("tochange").innerHTML = "ML model Sept 29"
      }
      else{
        document.getElementById("tochange").innerHTML = "No upcoming events!"
      }
  }
  else{
    document.getElementById("tochange").innerHTML = "ML model Sept 29"
  }
    }
  };

var acordion = document.getElementsByClassName('accordions');

var i;
var len = acordion.length;
for(i = 0; i<len; i++){
acordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
    var panal = this.nextElementSibling;
    if(panal.style.maxHeight){
        panal.style.maxHeight = null;
    }else{
        panal.style.maxHeight = panal.scrollHeight + 'px';
    }
})
}
