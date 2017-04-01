# Action
An executable item that is integrated in the application's navigation menu. Add a listener on select to implement the action.

Android |   iOS
:---------  | ---------:
![](file:///android_asset/www/src/images/android/action.png)  | ![](file:///android_asset/www/src/images/ios/action.png)
               
###### Extends `Widget`

## Properties

### image

**Type:** Image

Icon image for the action.

### placementPriority

**Type:** string, supported values: `low`, `high`, `normal`, default: `normal`

Actions with higher placement priority will be placed at a more significant position in the UI, e.g. low priority actions could go into a menu instead of being included in a toolbar.

### title

**Type:** string

The text to be displayed for the action.

### win_symbol

**Type:** string

Allows to override the image of the Action with an MDL2 ("Metro Design Language 2") symbol. When the string does not exactly match the name of an MDL2 symbol the image property is used instead. Platforms other than windows ignore this property and always show the image.

## Events

### select

Fired when the action is invoked.