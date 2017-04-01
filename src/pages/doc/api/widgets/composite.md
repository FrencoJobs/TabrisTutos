# Composite
An empty widget that can contain other widgets.

###### Extends `Widget`

## Methods

### append(...widgets)

#### Parameters:

**...widgets:** Widget[]
**Returns:** this

Adds the given widgets to the composite.

### append(widgets)

#### Parameters:

**widgets**: Widget[]
**Returns:** this

Adds all widgets in the given array to the composite.

### append(widgets)

#### Parameters:

**widgets**: `WidgetCollection`
**Returns:** this

Adds all widgets in the given collection to the composite.

## Events

### addchild

Fired when a child is added to this widget.

#### Event Parameters

**target:** this
The widget the event was fired on.

**child:** Widget
The widget that is added as a child.

**index**: number
Denotes the position in the children list at which the child widget is added.

### removechild

Fired when a child is removed from this widget.

#### Event Parameters

**target:** this
The widget the event was fired on.

**child**: `Widget`
The widget that is removed.

**index**: number
The property index denotes the removed child widget's position in the children list.`

## Example
```
// Create composites and append children to them

var composite1 = new tabris.Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(tabris.ui.contentView);

new tabris.TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 1'
}).appendTo(composite1);

var composite2 = new tabris.Composite({
  left: [composite1, 0], top: 0, bottom: 0, right: 0,
  background: '#eaeaea'
}).appendTo(tabris.ui.contentView);

new tabris.TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);
```