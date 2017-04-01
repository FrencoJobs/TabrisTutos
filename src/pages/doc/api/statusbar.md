# StatusBar
The status bar is the area where notifications, status icons and device time are displayed. The singleton instance can be accessed via `tabris.ui.statusBar.`

## Properties

### background

**Type:** Color

Background color of the status bar. Should be used in conjunction with the theme property to keep the status bar icons legible.

### displayMode

**Type:** string, supported values: `default`, `hide`, `float`, `default: default`

Controls how the status bar is positioned relative to the `tabris.ui.contentView`. The value default places the content below the status bar. The hide option lets the status bar disappear, making more room for the content. The float option lets the content flow underneath the status bar.

### height

#### read-only

**Type:** number

The height of the status bar in device independent pixel. Can be used in conjunction with the displayMode 'float' to offset the content as to not have it covered by the status bar.

### theme

**Type:** string, supported values:` default`, `light`, `dark`, `default: default`

Defines the shade used on the status bar. A dark theme sets the foreground icons to be of a light color, whereas light sets the icons to a dark color. The theme should be set in conjunction with the background property for contrast. The value default selects the default theme that depends on the device and on the app. Available on iOS and Android 6+.

## Example
```
createTextView('Theme');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  items: ['default', 'light', 'dark']
}).on('change:selection', function({value: theme}) {
  tabris.ui.statusBar.theme = theme;
}).appendTo(tabris.ui.contentView);

createTextView('Display mode', 'displayMode');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  items: ['default', 'float', 'hide']
}).on('change:selection', function({value: displayMode}) {
  tabris.ui.statusBar.displayMode = displayMode;
}).appendTo(tabris.ui.contentView);

createTextView('Background');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  items: [tabris.ui.statusBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue']
}).on('change:selection', function({value: background}) {
  tabris.ui.statusBar.background = background;
}).appendTo(tabris.ui.contentView);

createTextView('Height');

new tabris.TextView({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  text: tabris.ui.statusBar.height
}).appendTo(tabris.ui.contentView);

function createTextView(text, id) {
  new tabris.TextView({
    id: id,
    left: 16, top: 'prev() 16',
    text: text
  }).appendTo(tabris.ui.contentView);
}
```