# NavigationBar
The navigation bar is the onscreen area where Back, Home and similar buttons are displayed. The singleton instance can be accessed via tabris.ui.navigationBar and is only available on Android.

## Properties

### background

**Type:** Color

Background color of the `navigation bar.`

### displayMode

**Type:** string, supported values: `default`, `hide`, `float`, `default: default`

Controls how the navigation bar is positioned relative to the tabris.ui.contentView. The value default places the content above the navigation bar. The hide option lets the navigation bar disappear, making room for the content. The float option lets the content flow underneath the navigation bar.

### height

#### read-only

**Type:** number

The height of the navigation bar in device independent pixel. Can be used in conjunction with the displayMode float to offset the content as to not have it covered by the navigation bar.

## Example
```
createTextView('Display mode', 'displayMode');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  items: ['default', 'float', 'hide']
}).on('change:selection', function({value: displayMode}) {
  tabris.ui.navigationBar.displayMode = displayMode;
}).appendTo(tabris.ui.contentView);

createTextView('Background');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  items: [tabris.ui.navigationBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue']
}).on('change:selection', function({value: background}) {
  tabris.ui.navigationBar.background = background;
}).appendTo(tabris.ui.contentView);

createTextView('Height');

new tabris.TextView({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  text: tabris.ui.navigationBar.height
}).appendTo(tabris.ui.contentView);

function createTextView(text, id) {
  new tabris.TextView({
    id: id,
    left: 16, top: 'prev() 16',
    text: text
  }).appendTo(tabris.ui.contentView);
}
```