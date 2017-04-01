# TabFolder
A widget that can switch between tabs. Only children of type Tab are supported. Since the TabFolder does not compute its own size, the `width` and `height` must be defined by the respective layout properties (e.g. either width or left and right must be specified).

Android |   iOS
:---------  | ---------:
![](file:///android_asset/www/src/images/android/tabfolder.png)  | ![](file:///android_asset/www/src/images/ios/tabfolder.png)

###### Extends `Composite`

## Properties

### paging

**Type:** boolean

Enables swiping through tabs.

### selection

**Type:** Tab

The currently selected tab.

### tabBarLocation

**Type:** string, supported values: `top`, `bottom`, `hidden`, `auto`, default: `auto`

The placement of the tab titles. When set to "hidden", the tab bar will not be visible. When set to "auto", the position is platform dependent.
This property can only be set on widget creation. Once set, it cannot be changed anymore.

### tabMode

**Type:** string, supported values: `fixed`, `scrollable`, default: `fixed`

Controls how the tabs make use of the available horizontal space. Setting the tabMode to `"fixed" `makes the tabs span the entire available space. In case of a very wide TabFolder the `"fixed"` mode centers the tabs. The mode `"scrollable" `left aligns the tabs and allows to scroll the tabs if there are more tabs than would fit in the available space. Available on Android only.
This property can only be set on widget creation. Once set, it cannot be changed anymore.

## Events

### change:selection

Fired when the selection property changes.

##### Event Parameters

- **target:** this
The widget the event was fired on.

- **value:** Tab
The new value of the selection property.

### scroll

Fired when `paging` is enabled and a tab is scrolled. The `event `parameter contains position information relative to the currently selected `Tab`. Eg.: scrolling a 500px wide tab 10% to the left sets `offset` to `50.` Scrolling 10% to the right sets` offset` to` -50.`

#### Event Parameters

- **target:** this
The widget the event was fired on.

- **offset:** number
Number of pixels the current tab has scrolled horizontally.

- **selection:** Tab
The current value of the selection property.

### select

Fired when the selection property changes by user interaction.

#### Event Parameters

- **target:** this
The widget the event was fired on.

- **selection:** Tab
The new value of selection.

## Example
```
// Create a swipe enabled tab folder with 3 tabs

var tabFolder = new tabris.TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(tabris.ui.contentView);

var createTab = function(title, image, seletedImage) {
  var tab = new tabris.Tab({
    title: title, // converted to upper-case on Android
    image: {src: image, scale: 2},
    selectedImage: {src: seletedImage, scale: 2}
  }).appendTo(tabFolder);
  new tabris.TextView({
    centerX: 0, centerY: 0,
    text: 'Content of Tab ' + title
  }).appendTo(tab);
};

createTab('Cart', 'images/cart.png', 'images/cart-filled.png');
createTab('Pay', 'images/card.png', 'images/card-filled.png');
createTab('Statistic', 'images/chart.png', 'images/chart-filled.png');

tabFolder.on('change:selection', function({value: tab}) {
  console.log(tab.title);
});
```