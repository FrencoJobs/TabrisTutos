# device
The object tabris.device provides information about the device that executes the application.

###### Example:
```
var lang = tabris.device.get("language");

tabris.device.on("change:orientation", function(event) {
  console.log("new orientation:", event.value);
});
```
###### Extends `NativeObject`

## Properties

### language

#### read-only

**Type:** string

The user language configured on the device as an RFC 4646 compliant string. For example "de", "es-ES", etc. This property is also available globally as navigator.language.

### model

#### read-only

**Type:** string

The name of the device model. For example "iPad4,1" or "Nexus 7". This property is also available globally as device.model.

### orientation

#### read-only

**Type:** string, supported values: portrait-primary, portrait-secondary, landscape-primary, landscape-secondary

The device orientation. One of portrait-primary, portrait-secondary, landscape-primary, and landscape-secondary.

### platform

**Type:** string, supported values: Android, iOS, windows

The name of the platform. Currently either "Android" or "iOS". This property is also available globally as device.platform.

### scaleFactor

#### read-only

**Type:** number

The ratio between physical pixels and device independent pixels. This property is also available globally as window.devicePixelRatio.

### screenHeight

#### read-only

**Type:** number

The entire height of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available globally as screen.height.

### screenWidth

#### read-only

**Type:** number

The entire width of the device's screen in device independent pixel. Depends on the current device orientation. This property is also available as globally as screen.width.

### version

#### read-only

**Type:** string

The platform version. On iOS it lools like this: "8.1.1". On Android, the version code is returned. This property is also available globally as device.version.

### win_keyboardPresent

#### read-only

**Type:** boolean

Returns true if a hardware keyboard is present. The developer may choose to handle some user input differently in that case. Available only on windows.

### win_primaryInput

#### read-only

**Type:** boolean, supported values: touch, mouse

On a PC this returns "touch" when in tablet mode, otherwise "mouse". On phones this this returns "mouse" when displayed on an external display ("Continuum"), otherwise "touch". Available only on windows

## Events

**change**:orientation

Fired when the orientation property has changed and the rotation animation has finished.

### Event Parameters

**target:** this
The widget the event was fired on.

**value:** string
The new value of the orientation property.

#### Example
```
// Display available device information

['platform', 'version', 'model', 'language', 'orientation'].forEach(function(property) {
  new tabris.TextView({
    id: property,
    left: 10, right: 10, top: 'prev() 10',
    text: property + ': ' + tabris.device[property]
  }).appendTo(tabris.ui.contentView);
});

tabris.device.on('change:orientation', function({value :orientation}) {
  tabris.ui.contentView.find('#orientation').set('text', 'orientation: ' + orientation);
});
```