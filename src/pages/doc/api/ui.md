# ui
The object `tabris.ui` represents the top-level parent for all widgets. It provides access to the status bar, the navigation bar, the drawer and the content view.

###### Extends `Composite`

## Properties

### contentView

**Type:**` Composite`

The content view is the container for the widgets that constitute the app's main UI. It covers the entire app area. Widgets can be appended directly to the content view.

### drawer

**Type:** `Drawer`

A drawer that can be swiped in from the left edge of the screen. The drawer is locked by default. To use it in an application, set the property locked to false. The drawer can contain any kind of widgets.

### navigationBar

**Type:** `NavigationBar`

Represents the system navigation bar is the onscreen area where Back, Home and similar buttons are displayed. It is only available on Android.

### statusBar

**Type:** `StatusBar`

Represents the system status bar. This is the area where notifications, status icons and device time are displayed.