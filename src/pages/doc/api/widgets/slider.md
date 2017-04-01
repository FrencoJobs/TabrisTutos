# Slider
A widget representing a numeric value as an movable indicator on a horizontal line.

Android |   iOS
:---------  | ---------:
![](file:///android_asset/www/src/bundled_tabris_js_launcher/images/android/slider.png)  | ![](file:///android_asset/www/src/bundled_tabris_js_launcher/images/ios/slider.png)

###### Extends `Widget`

## Properties

### maximum

**Type:** number, default: 100

The maximum value.

### minimum

**Type:** number, default: 0

The minimum value.

### selection

**Type:** number, default: 0

The actual value.

## Events

### change:selection

Fired when the selection property changes.

#### Event Parameters

**target:** this
The widget the event was fired on.

**value:** number
The new value of the selection property.

### select

Fired when the selection property is changed by the user.

#### Event Parameters

**target:** this
The widget the event was fired on.

**selection**: number
The new value of selection.

## Example
```
// Create a slider with a selection handler

var textView = new tabris.TextView({
  left: 10, right: 10, top: '30%',
  alignment: 'center',
  font: '22px sans-serif',
  text: '50'
}).appendTo(tabris.ui.contentView);

new tabris.Slider({
  left: 50, top: [textView, 20], right: 50,
  minimum: -50,
  selection: 50,
  maximum: 150
}).on('change:selection', function({value}) {
  textView.text = value;
}).appendTo(tabris.ui.contentView);
```