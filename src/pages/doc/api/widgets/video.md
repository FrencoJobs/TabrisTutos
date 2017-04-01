# Video
A widget that plays a video from an URL.

Android |   iOS
:---------  | ---------:
![](file:///android_asset/www/src/images/android/video.png)  | ![](file:///android_asset/www/src/images/ios/video.png)

###### Extends `Widget`

## Methods

### pause()

Pauses the video. `state` changes to `pause` and `speed` to `0`. Has no effect when `state` is not `play`.

### play()

Starts playing the video,` state `changes to `play`. Has no effect if the current `state` is not either `pause` or `ready`.

### play(speed)

#### Parameters:

**speed**: number, desired playback speed. If the given speed is not supported by the platform or video, the actual playback speed will be 1 - i.e. the natural speed of the video.
Starts playing the video, state changes to play. Has no effect if the current state is not either pause or ready.

### seek(position)

#### Parameters:

**position:** number, desired `position` in milliseconds.
Attempts to change the `position` to the given time index. Success depends on the currently loaded video. Has no effect if the current state is empty or fail.

## Properties

### autoPlay

**Type:** boolean, default:` true`

If set to true, starts playing the video as soon as the state changes from open to ready.

### controlsVisible

**Type:** boolean, default: true

If set to true, overlays the video with a native UI for controlling playback.

### duration

#### read-only

**Type:** number

Returns the full length of the current video in milliseconds.

### position

#### read-only

**Type:** number

Returns the current playback `position` in milliseconds. This property does not trigger any change events.

### speed

#### read-only

**Type:** number

Returns the current playback speed. The value 1 represents the natural speed of the video. When the state of the widget is not play this property always has the value `0`.

### state

#### read-only

**Type:** string, supported values: `empty`, `open`, `ready`, `play`, `stale`, `pause`, `finish`, `fail`, default: `empty`

The current state of the widget.

### url

**Type:** string

The URL of the video to `play.` Setting this property to any non-empty string changes the state to open and the video starts loading. Setting this property to an empty string unloads the current video and the state returns to empty.

## Events

### change:state

Fired when the `state` property changes.

#### Event Parameters

**target:** this
The widget the event was fired on.

**value:** string
The new value of the `state` property.

## Example
```
var video = new tabris.Video({
  left: 0, top: 0, right: 0, bottom: '#button 16',
  url: 'http://peach.themazzone.com/durian/movies/sintel-1280-stereo.mp4',
  controlsVisible: false
}).on('change:state', function(event) {
  button.text = event.value !== 'pause' ? '❚❚' : '▶';
}).appendTo(tabris.ui.contentView);

var button = new tabris.Button({
  id: 'button',
  centerX: 0, bottom: 16,
  text: '❚❚'
}).on('select', function() {
  video.state === 'play' ? video.pause() : video.play();
}).appendTo(tabris.ui.contentView);
```