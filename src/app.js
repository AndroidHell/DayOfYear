// so far this app just gives day of year, current date and 12 hour time
// shows both 12 hour and  military time dynamically
// currently leaving actionbar off for up, down, and select screens
// Might add weather forecast and such later

var UI = require('ui');
var Vector2 = require('vector2');
var Feature = require('platform/feature');

var window = new UI.Window({ fullscreen: true, backgroundColor: 'white' });

var textfield = new UI.TimeText({
  position: Feature.round(new Vector2(16,40), new Vector2(2, 30)),
  size: new Vector2(144, 168),
  font: 'gothic-24-bold',
  text: 'DoY: %j\n%a, %b %d, %Y\n24hr: %H:%M:%S 12hr: %I:%M:%S',
  textAlign: Feature.round('center', 'left'),
  color: 'black',
  backgroundColor: 'white',
});

window.add(textfield);
window.show();


//nuclear testing below
//just a skeleton for buttons
//will probably not use this unless I can come up with a reason
/*window.on('click', 'up', function(e) {
  var card = new UI.Card();
  card.title('Up Button');
  card.subtitle('You clicked Up');
  card.body('Something will go here.');
  card.show();
});

window.on('click', 'select', function(e) {
  var card = new UI.Card();
  card.title('Select Button');
  card.subtitle('You clicked Select');
  card.body('Something may or may not go here.');
  card.show();
});

window.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('Going Down?');
  card.subtitle('No, not that...');
  card.body('Get your mind out of the gutter.');
  card.show();
});

window.add(textfield);
window.show();*/