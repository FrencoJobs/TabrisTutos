# Page
A container representing a single page of a `NavigationView` widget.

###### Extends `Composite`

## Properties

### autoDispose

**Type:** boolean, default: `true`

Defines whether this page will be automatically disposed when popped from the NavigationView, e.g. using native back navigation.

### image

**Type:** Image

An image to be displayed in the navigation bar. Not supported on Windows.

### title

**Type:** string

The page title to be displayed in the navigation bar.

## Events

### appear

Fired when the page is about to become visible, i.e. it has become the active page.

### disappear

Fired when the page is no longer visible, i.e. another page has become the active page.