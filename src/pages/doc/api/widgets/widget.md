# Widget
Base class for all widgets

###### Extends `NativeObject`

## Methods

### animate(properties, options)

#### Parameters:

**properties:** `{transform?: Transformation, opacity?: number}`, the properties and target values to animate.  
**options**: AnimationOptions, configures the animation itself.  
**Returns:** Promise  

Starts an animation that transforms the given properties from their current values to the given ones. Supported properties are transform and opacity. Returns a promise that is resolved once the animation is completed and is rejected if the animation is aborted.

### appendTo(parent)

#### Parameters:

**parent:** Composite  
**Returns:** this

Appends this widget to the given parent. The parent widget must support children (extending Composite). If the widget already has a parent, it is removed from the old parent.

### apply(properties)

#### Parameters:

**properties:** Object, an object in the format `{selector:property: value, property: value, ... }, selector: ...}`  
**Returns:** this

Applies the given properties to all descendants that match the associated selector(s).

### children()

**Returns:** WidgetCollection

Returns a (possibly empty) collection of all children of this widget.

### children(selector)

#### Parameters:

**selector:** Selector, a selector expression or a predicate function to filter the results.  
**Returns:** WidgetCollection

Returns a (possibly empty) collection of all children of this widget that match the given selector.

### detach()

**Returns:** this

Removes this widget from its parent.

### dispose()

Removes this widget from its parent and destroys it. Also disposes of all its children. Triggers a remove event on the parent and a dispose event on itself. The widget can no longer be used.

### find()

**Returns:** WidgetCollection

Returns a (possibly empty) collection of all descendants of this widget.

### find(selector)

#### Parameters:

**selector:** Selector, a selector expression or a predicate function to filter the results.  
**Returns:** WidgetCollection

Returns a (possibly empty) collection of all descendants of this widget that match the given selector.

### insertAfter(widget)

#### Parameters:

**widget:** Widget  
**Returns:** this

Inserts this widget directly after the given widget. If the widget already has a parent, it is removed from the old parent.

### insertBefore(widget)

#### Parameters:

**widget:** Widget  
**Returns:** this

Inserts this widget directly before the given widget. If the widget already has a parent, it is removed from the old parent.

### isDisposed()

**Returns:** boolean

Returns true if the widget has been disposed, otherwise false.

### parent()

**Returns:** Composite

Returns the parent of this widget or null if this widget is not appended to a parent.

### siblings()

**Returns:** WidgetCollection

Returns a (possibly empty) collection of all siblings of this widget.

### siblings(selector)

#### Parameters:

**selector:** Selector, a selector expression or a predicate function to filter the results.  
**Returns:** WidgetCollection

Returns a (possibly empty) collection of all siblings of this widget that match the given selector.

## Properties

### background

**Type:** Color

Background color of the widget.

### backgroundImage

**Type:** Image

An image to be displayed on the widget's background. If the image is smaller than the widget, it will be tiled.

### baseline

**Type:** Widget

The vertical position of the widget's baseline relative to a sibling widget.

### bottom

**Type:** margin

The position of the widget's bottom edge relative to the parent or a sibling widget.

### bounds

#### read-only

**Type:** Bounds

The actual location and size of the widget, relative to its parent.

### centerX

**Type:** offset

The horizontal position of the widget's center relative to the parent's center.

### centerY

**Type:** offset

The vertical position of the widget's center relative to the parent's center.

### class

**Type:** string

A class name or a whitespace separated list of class names to identify the widget. Class names are arbitrary strings that describe a state or a category and help to select widgets using a selector expression. A class name may only contain alphanumeric characters, _ and -. Class names can also be added or removed using the field classList.

### classList

**Type:** string[]

Provides convenient access to the list of class names set to this widget. Class names can either be set using the class property or by modifying the classList directly.

### cornerRadius

**Type:** number

Configure a widget to have rounded corners. Each corner is affected equally. Supported on iOS and Android 5.0+.

### elevation

**Type:** number

The position of the widget on the z-axis. Currently only supported on Android 5.0+.

### enabled

**Type:** boolean, default: true

Whether the widget can be operated.

### font

**Type:** Font

The font used for the widget.

### height

**Type:** dimension

The height of the widget.

### highlightOnTouch

**Type:** boolean, default: false

Whether the entire widget should be highlighted while touched.

### id

**Type:** string

A string to identify the widget by using selectors. IDs are optional. It is strongly recommended that they are unique within a page.

### layoutData

**Type:** LayoutData

Shorthand for all layout properties. See Layout.

### left

**Type:** margin

The position of the widget's left edge relative to the parent or a sibling widget.

### opacity

**Type:** number, default: 1

Opacity of the entire widget, in the range [0..1]. Can be used for fade animations.

### right

**Type:** margin

The position of the widget's right edge relative to the parent or a sibling widget.

### textColor

**Type:** Color

Text color of the widget.

### top

**Type:** margin

The position of the widget's top edge relative to the parent or a sibling widget.

### transform

**Type:** Transformation

Modifications to the widget's shape, size, or position. Can be used for animations. Note: In Android the transform property does not affect the bounds property, while it does so in iOS.

### visible

**Type:** boolean, default: true

Whether the widget is visible.

### width

**Type:** dimension

The width of the widget.

### win_theme

**Type:** string, supported values: light, dark, default, default: default

Controls the color scheme used for this widget. When set to "default" the theme is inherited from either the parent (if present) or the OS settings. Available only on windows.

## Events

### dispose

Fired when the widget is about to be disposed. At this point the widget and its children are still accessible.

### longpress

Fired after pressing a widget for a specific amount of **time:** (about a second), and again on lifting the finger.

#### Event Parameters

**target:** this
The widget the event was fired on.

**state:** 'start'|'end'|'cancel'
'start' when the widget has been hold down long enough, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

**touches:**`{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### pan

Fired continuously after a finger touching the widget moved for a certain distance.

#### Event Parameters

**target:** this
The widget the event was fired on.

**state:** 'start'|'change'|'end'|'cancel'
'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

**touches:**`{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

**translation:** `{x: number, y: number}`
Current touch coordinates relative to the coordinates of the first touch.

**velocity:** `{x: number, y: number}`
Current touch velocity in pixels per second.

### pan:down

Fired when a finger starts moving down.

#### Event Parameters

**target:** this
The widget the event was fired on.

**state:** 'start'|'change'|'end'|'cancel'
'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

**touches:**`{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

**translation:** `{x: number, y: number}`
Current touch coordinates relative to the coordinates of the first touch.

**velocity:** `{x: number, y: number}`
Current touch velocity in pixels per second.

### pan:left

Fired when a finger starts moving left.

#### Event Parameters

**target:** this
The widget the event was fired on.

**state:** 'start'|'change'|'end'|'cancel'
'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

**touches:**`{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

**translation:** `{x: number, y: number}`
Current touch coordinates relative to the coordinates of the first touch.

**velocity:** `{x: number, y: number}`
Current touch velocity in pixels per second.

### pan:right

Fired when a finger starts moving right.

#### Event Parameters

**target:** this
The widget the event was fired on.

**state:** 'start'|'change'|'end'|'cancel'
'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

**touches:** `{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

**translation:** `{x: number, y: number}`
Current touch coordinates relative to the coordinates of the first touch.

**velocity:** `{x: number, y: number}`
Current touch velocity in pixels per second.

### pan:up

Fired when a finger starts moving up.

#### Event Parameters

**target:** this
The widget the event was fired on.

**state:** 'start'|'change'|'end'|'cancel'
'start' when the finger starts moving, 'change' while the finger is moving, 'end' when the finger has been lifted and 'cancel' when the gesture has been interrupted.

**touches:** `{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

**translation:** `{x: number, y: number}`
Current touch coordinates relative to the coordinates of the first touch.

**velocity:** `{x: number, y: number}`
Current touch velocity in pixels per second.

### resize

Fired when the widget's size has changed. You can use this event to apply new layoutData.

#### Event Parameters

**target:** this
The widget the event was fired on.

**height:** number
The height of the widget in dip.

**left:** number
The horizontal offset from the parent's left edge in dip.

**top:** number
The vertical offset from the parent's top edge in dip.

**width:** number
The width of the widget in dip.

### swipe:down

Fired when a finger moves down quickly.

#### Event Parameters

**target:** this
The widget the event was fired on.

**touches:** `{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### swipe:left

Fired when a finger moves left quickly.

#### Event Parameters

**target:** this
The widget the event was fired on.

**touches:**`{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### swipe:right

Fired when a finger moves right quickly.

#### Event Parameters

**target:** this
The widget the event was fired on.

**touches:** `{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### swipe:up

Fired when a finger moves up quickly.

#### Event Parameters

**target:** this
The widget the event was fired on.

**touches:** `{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### tap

Fired once when a finger briefly touched the widget.

#### Event Parameters

**target:** this
The widget the event was fired on.

**touches:**`{x: number, y: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### touchcancel

Fired instead of touchend when the touch ends on another widget than it started on.

#### Event Parameters

**target:** this
The widget the event was fired on.

**time:** number
Number of milliseconds since the start of the app.

**touches:** `{x: number, y: number, absoluteX: number, absoluteY: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### touchend

Fired when a touch ends on the same widget than it started on.

#### Event Parameters

**target:** this
The widget the event was fired on.

**time:** number
Number of milliseconds since the start of the app.

**touches:** `{x: number, y: number, absoluteX: number, absoluteY: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### touchmove

Fired repeatedly while swiping across the screen.

#### Event Parameters

**target:** this
The widget the event was fired on.

**time:** number
Number of milliseconds since the start of the app.

**touches:** `{x: number, y: number, absoluteX: number, absoluteY: number}`[]
Touch coordinates relative to the origin coordinates of the widget.

### touchstart

Fired when a widget is touched. See Touch Events.

#### Event Parameters

**target:** this
The widget the event was fired on.

**time:**: number
Number of milliseconds since the start of the app.

**touches:**: `{x: number, y: number, absoluteX: number, absoluteY: number}`[]
Touch coordinates relative to the origin coordinates of the widget.