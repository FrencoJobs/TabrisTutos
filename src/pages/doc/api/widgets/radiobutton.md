# RadioButton
A radio button. Selecting a radio button de-selects all its siblings (i.e. all radio buttons within the same parent).

Android |   iOS
:---------  | ---------:
![](file:///android_asset/www/src/images/android/radiobutton.png)  | ![](file:///android_asset/www/src/images/ios/radiobutton.png)

###### Extends `Widget`

## Properties

### checked

**Type:** boolean, default: `false`

The checked state of the radio button.

text

**Type:** string

The label text of the radio button.

## Events

### change:checked

Fired when the checked property changes.

#### Event Parameters

**target**: this
The widget the event was fired on.

**value**: boolean
The new value of the checked property.

### select

Fired when the radio button is selected or deselected by the user.

#### Event Parameters

**target**: this
The widget the event was fired on.

**checked**: boolean
The new value of checked.

## Example
```
// Create radio buttons with checked handlers

['One', 'Two', 'Three'].forEach(function(title) {
  new tabris.RadioButton({
    left: 10, top: 'prev() 10',
    text: title
  }).on('change:checked', function({target, value: checked}) {
    if (checked) {
      console.log(target.text + ' checked');
    }
  }).appendTo(tabris.ui.contentView);
});
```