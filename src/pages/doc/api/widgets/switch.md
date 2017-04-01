# Switch
A switch widget that can be toggled.

Android |   iOS
:---------  | ---------:
![](file:///android_asset/www/src/images/android/switch.png)  | ![](file:///android_asset/www/src/images/ios/switch.png)

###### Extends `Widget`

## Properties

### checked

**Type:** boolean, default: `false`

The checked state of the switch.

### thumbOffColor

**Type:** Color

The color of the movable thumb, when switched off.

### thumbOnColor

**Type:** Color

The color of the movable thumb, when switched on.

### trackOffColor

**Type:** Color

The color of the track that holds the thumb, when switched off.

### trackOnColor

**Type:** Color

The color of the track that holds the thumb, when switched on.

## Events

### change:checked

Fired when the checked property changes.

#### Event Parameters

- **target:** this
The widget the event was fired on.

- **value:** boolean
The new value of the checked property.

### select

Fired when the switch is toggled by the user.

#### Event Parameters

- **target:** this
The widget the event was fired on.

- **checked**: boolean
The current value of checked.

## Example
```
// Create a switch with a checked handler

var MARGIN = 16;

new tabris.Switch({
  left: MARGIN, top: MARGIN,
  id: 'switch',
  checked: true
}).on('change:checked', function({value: checked}) {
  tabris.ui.contentView.find('#stateView').first().text = checked ? 'State: checked' : 'State: unchecked';
}).appendTo(tabris.ui.contentView);

new tabris.TextView({
  left: ['#switch', MARGIN], baseline: '#switch',
  id: 'stateView',
  text: 'State: checked'
}).appendTo(tabris.ui.contentView);

new tabris.Button({
  left: MARGIN, top: ['#switch', MARGIN],
  text: 'Toggle Switch'
}).on('select', function() {
  var switcher = tabris.ui.contentView.find('#switch').first();
  switcher.checked = !switcher.checked;
}).appendTo(tabris.ui.contentView);
```