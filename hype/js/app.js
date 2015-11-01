var settings = {
  "sound": false,
  "targetDate": "2015/12/17 17:30:00",
  "colons": 3,
  "countdown": true //reverts to clock if false
};


var tickSound = new Audio('./sounds/tickSound.mp3');
var tockSound = new Audio('./sounds/tockSound.mp3');
var tickOrTock = true;

//calculate time between now and future
var initCountdown = function(callback) {
  var date1 = new Date();
  var date2 = new Date(settings.targetDate);


  var diff = (date2 - date1) / 1000;
  if(diff<0){
    return;
  }
  var diff = Math.abs(Math.floor(diff));
  var days = Math.floor(diff / (24 * 60 * 60));
  var leftSec = diff - days * 24 * 60 * 60;

  var hrs = Math.floor(leftSec / (60 * 60));
  var leftSec = leftSec - hrs * 60 * 60;

  var min = Math.floor(leftSec / (60));
  var leftSec = leftSec - min * 60;

  var timeLeft = checkZero(days) +
                 checkZero(hrs) +
                 checkZero(min) +
                 checkZero(leftSec);


  printTime(timeLeft);
  setTimeout(initCountdown, 1000);

};

//if number <10 add 0 in before
var checkZero = function(temp) {
  if (temp < 10) {
    temp = String('0' + temp);
  }
  return temp;
};

//takes int, turns into array
var intToArray = function(input) {

  var temp = input.split('');
  return checkZero(temp);
};

var tickTock = function() {

  if (settings.sound === true) {
    if (tickOrTock) {
      tickSound.play();
    } else {
      tockSound.play();
    }
    tickOrTock = !tickOrTock;
  }
};

//takes parameter and prints in divs, filled with numbers.
var printTime = function(time) {

  $('.clockContainer').html('');
  var nrsPrinted = 0;

  //create twodimensional array for the time.
  //Probably there is a much easier way to do this, but nvm for now
  for (i = 0; i < time.length; i++) {
    for (e = 0; e < time[i].length; e++) {
      $('.clockContainer').append(time[i][e]);
    }
    // print colon each 2nd nr
    if (i % 2 && nrsPrinted / 2 <= settings.colons) {
      $('.clockContainer').append(':');

    }
    nrsPrinted++;
  }
  tickTock();
};

/*get curren time*/
var getTime = function() {
  var timeArray = [];
  var currentTime = new Date();
  timeArray.push(intToArray(currentTime.getHours()));
  timeArray.push(intToArray(currentTime.getMinutes()));
  timeArray.push(intToArray(currentTime.getSeconds()));

  printTime(timeArray);

  // play tick or tock sound

  tickTock();
  setTimeout(getTime, 1000);
};

var startClock = function(callback) {

  /* PASS IN SETTINGS OBJECT
  -sound on/off
  -display-current-time
  -countdown ( date )
    target
      year
      month
      date
      time


  callbackfunktion
  When countdown has ended, do this.
  */

  if(settings.countdown){
    initCountdown(callback);
  }else{
    getTime();
  }
};


$(document).ready(function() {
  startClock(
    function(){alert('hej!')}
  );
});
