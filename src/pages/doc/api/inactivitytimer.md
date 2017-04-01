# InactivityTimer
A timer that triggers when the app has not been interacted with for a configurable interval.

## Methods

### cancel()

Stops and resets the timer.

### start()

Starts the timer with the currently configured delay. After the first timeout event, the timer will stop but it can be started again.

## Properties

### delay

**Type:** number, default: 0

The interval of user inactivity that will trigger the timer. Given in milliseconds. Changes to this property will not affect a running timer.

## Events

### timeout

Fired when the app has not been interacted with since the configured delay.

### Example
```
var timer = new tabris.InactivityTimer({
  delay: 2000
}).on('timeout', function() {
  label.text = 'inactive!';
});

var label = new tabris.TextView({
  centerX: 0, top: 16,
  text: ''
}).appendTo(tabris.ui.contentView);

new tabris.Button({
  centerX: 0, top: 'prev()',
  text: 'Start'
}).on('select', function() {
  timer.start();
  label.text = 'started';
}).appendTo(tabris.ui.contentView);

new tabris.Button({
  centerX: 0, top: 'prev()',
  text: 'Cancel'
}).on('select', function() {
  timer.cancel();
  label.text = 'cancelled';
}).appendTo(tabris.ui.contentView);
```