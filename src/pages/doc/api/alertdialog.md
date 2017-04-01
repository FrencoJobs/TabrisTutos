# AlertDialog
A AlertDialog represents a native dialog pop-up showing a message and up to three buttons. It is placed on top of any other API, but is not a widget itself.

###### Extends `NativeObject`
## Methods
### close()
**Returns:** this
Hides the dialog permanently. It can not be made visible anymore.
### open()
**Returns:** this
Makes the dialog visible.
## Properties

### buttons

**Type:** `{ok?: string, cancel?: string, neutral?: string}`

An object with the texts of the buttons to display. There are up to three buttons: `ok`, `cancel` and `neutral`. If no text is given for a button it will not be displayed. Example: `{ok: 'Yes', cancel: 'No'}` shows 'Yes' and 'No', but no 'neutral' button.
### message

**Type:** string
The message to display inside the dialog.
### title
**Type:** string
The title of the dialog.
## Events
### close
Fired when the dialog was closed for any reason.
Event Parameters

- **target:** this
The widget the event was fired on.

- **button:** `'ok'|'cancel'|'neutral'|''`
The type of button that was used to close the dialog. Can also be an empty string, e.g. when the global back button was pressed.

### close:cancel
Fired when the dialog was closed by pressing the 'cancel' button.

### close:neutral
Fired when the dialog was closed by pressing the 'neutral' button.

### close:ok
Fired when the dialog was closed by pressing the 'ok' button.

###### __Example__
```
// AlertDialog example

new tabris.Button({
  left: 16, top: 'prev() 16', right: 16,
  text: 'Show simple dialog'
}).on('select', function () {
  new tabris.AlertDialog({
    message: 'Your comment has been saved.',
    buttons: {'ok': 'Acknowledge'}
  }).open();
}).appendTo(tabris.ui.contentView);

new tabris.Button({
  left: 16, top: 'prev() 16', right: 16,
  text: 'Show full featured dialog'
}).on('select', function() {
  new tabris.AlertDialog({
    title: 'Conflict while saving',
    message: 'How do you want to resolve the conflict?',
    buttons: {
      'ok': 'Replace',
      'cancel': 'Discard',
      'neutral': 'Keep editing'
    }
  }).on('close:ok', function() {console.log('Replace');})
    .on('close:neutral', function() {console.log('Keep editing');})
    .on('close:cancel', function() {console.log('Discard');})
    .on('close', function({button}) {console.log('Dialog closed: ' + button);})
    .open();
}).appendTo(tabris.ui.contentView);

new tabris.Button({
  left: 16, top: 'prev() 16', right: 16,
  text: 'Show self closing dialog'
}).on('select', function() {
  var alertDialog = new tabris.AlertDialog({
    message: 'This dialogs closes in 3 seconds.',
    buttons: {'ok': 'OK'}
  }).open();
  setTimeout(function() {alertDialog.close();}, 3000);
}).appendTo(tabris.ui.contentView);
```