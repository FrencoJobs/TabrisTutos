# NativeObject
Base class for all objects with a native implementation.

## Methods

### get(property)

#### Parameters:

**property**: string
**Returns**: any

Gets the current value of the given property.

### off(type, listener, context?)

#### Parameters:

**type**: string, the type of events to remove listeners for.
**listener**: (event: any) => void, the listener function to remove.
**context?**: Object, the context of the bound listener to remove.
**Returns**: this

Removes all occurrences of listener that are bound to type and context from this widget.

### on(type, listener, context?)

#### Parameters:

**type**: string, the type of events to listen for.
**listener**: (event: any) => void, the listener function to register. This function will be called with an event object.
**context?**: Object, in the listener function, this will point to this object. If not present, the listener will be called in the context of this object.
**Returns**: this

Registers a listener function to be notified of events of the given type.

### once(type, listener, context?)

#### Parameters:

**type:** string, the type of the event to listen for.
**listener:** (event: any) => void, the listener function to register. This function will be called with an event object.
**context?:** Object, in the listener function, this will point to this object. If not present, the listener will be called in the context of this object.
**Returns**: this

Same as on, but removes the listener after it has been invoked by an event.

### set(property, value)

#### Parameters:

**property**: string
**value:** any
**Returns**: this

Sets the given property.

### set(properties)

**Parameters:**

**properties:** Object
**Returns**: this

Sets all key-value pairs in the properties object as widget properties.

### trigger(type, event)

#### Parameters:

**type**: string
**event**: Object, the event object to pass to listener functions.
**Returns**: this

Notifies all registered listeners for the given type and passes the event object to the listeners.

## Properties

### cid

#### read-only

**Type**: string

An application-wide unique identifier automatically assigned to all native objects on creation.