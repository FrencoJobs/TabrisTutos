# CheckBox
A check box widget.

Android |   iOS
:---------  | ---------:
![](file:///android_asset/www/src/images/android/checkbox.png)  | ![](file:///android_asset/www/src/images/ios/checkbox.png)

###### Extends `Widget`

## Properties

### checked

**Type:** `boolean`, default: `false`

The checked state of the check box.

text

**Type:** string

The label text of the check box.

## Events

### change:checked

Fired when the check box is `checked` or unchecked.

#### Event Parameters

**target**: this
The widget the event was fired on.

**value**: boolean
The new value of the checked property.

### select

Fired when the check box is checked or unchecked by the user.

#### Event Parameters

**target**: this
The widget the event was fired on.

### checked: boolean
The new value of checked.

## Example
```
// Create a check box with a checked handler

new tabris.CheckBox({
  left: 10, top: 10,
  checked: true,
  text: 'checked'
}).on('change:checked', function(event) {
  event.target.text = event.value ? 'checked' : 'unchecked';
}).appendTo(tabris.ui.contentView);
```