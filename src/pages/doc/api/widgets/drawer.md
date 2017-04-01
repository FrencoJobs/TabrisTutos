# Drawer
A drawer that can be swiped in from the left edge of the screen. There's only a single instance that can be accessed via `tabris.ui.drawer`. The drawer is `locked` by default. To use it in an application, set the property locked to `false`. The drawer can contain any kind of widgets.

###### Extends `Composite`

## Methods

### close()

**Returns:** this

Closes the drawer.

### open()

**Returns:** this

Opens the drawer. It may be useful to call this method on first startup, so that users notice the drawer and its contents.

## Properties

### enabled

**Type:** `boolean`, default: `false`

Controls whether the drawer can be opened and closed. When set to false, the drawer cannot be opened and calls to `drawer.open()` will be ignored.

### win_displayMode

**Type:** string, supported values: `overlay`, `compactOverlay`, `inline`, `compactInline`, default: `overlay`

Controls how the drawer integrates in to its targetView.

- `overlay` completely hides the drawer when closed and overlays other content when opend.
- `compactOverlay` makes the drawer partially visible when closed so a 48px wide bar remains side-by-side with the targetViews other content. If a drawer-action controls the drawer it is placed inside this bar. When the drawer is opend its remaining width overlays the targetViews other content.
- `inline` completely hides the drawer when closed, but shows it side-by-side with the targetView when opend. The drawer does not close automatically in this mode.
- `compactInline` makes the drawer partially visible when closed (like `compactOverlay`), but shows it side-by-side with the targetView when opend (like `inline`).
Available only on windows.

### win_targetView

**Type:** Widget, default: tabris.ui

This property may be set to an instance of `NavigationView` to make its drawer-action open/close the drawer. It also integrates the drawer into the NavigationView layout. When not set to NavigationView instance the property defaults to tabris.ui. Other widgets are not supported. Available only on Windows.

## Events

### close

Fired when the drawer is closed and has reached its resting position.

### open

Fired when the drawer is opened and has reached its resting position.

## Example
```
// Enable the drawer and append a widget to it

var drawer = tabris.ui.drawer;

drawer.enabled = true;

drawer.on('open', function() {
  console.log('drawer opened');
}).on('close', function() {
  console.log('drawer closed');
});

var arrow = String.fromCharCode(8592);
createLabel(arrow + ' Swipe from left or tap here').on('tap', function() {
  drawer.open();
}).appendTo(tabris.ui.contentView);

createLabel('Thank you!').on('tap', function() {
  drawer.close();
}).appendTo(drawer);

function createLabel(text) {
  return new tabris.TextView({
    left: 10, centerY: 0,
    text: text,
    font: '22px Arial'
  });
}
```