// so far this app just gives day of year, current date and 12 hour time
// will show both 12 hour and  military time
// will show data using pebble code instead of js method
// look into moving elements to look better on time and round
// currently leaving actionbar on up, down, and select screens

var UI = require('ui');

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var dayofyear = Math.floor(diff / oneDay);
var n = now.toDateString();

function getTwelveHourTime(){
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   var ap = "AM";
   if (hour   > 11) { ap = "PM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour  === 0) { hour = 12;             }
   if (hour   < 10) { hour   = "0" + hour;   }
   if (minute < 10) { minute = "0" + minute; }
   var timeString = hour + ':' + minute + ':' + " " + ap;
   return timeString;
}

var t = getTwelveHourTime();

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var h = addZero(now.getHours());
var m = addZero(now.getMinutes());

var main = new UI.Card({
  subtitle: '\nDoY: ' + dayofyear,  
  body: n + '\n12h: ' + t + '\n24h: ' + h + ":" + m,
});

main.fullscreen(true);

main.show();

//nuclear testing below
//just a skeleton for buttons
//will probably not use this unless I can come up with a reason
/*main.on('click', 'up', function(e) {
  var card = new UI.Card();
  card.title('Up Button');
  card.subtitle('You clicked Up');
  card.body('Something will go here.');
  card.show();
});

main.on('click', 'select', function(e) {
  var card = new UI.Card();
  card.title('Select Button');
  card.subtitle('You clicked Select');
  card.body('Something may or may not go here.');
  card.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('Going Down?');
  card.subtitle('No, not that...');
  card.body('Get your mind out of the gutter.');
  card.show();
});*/