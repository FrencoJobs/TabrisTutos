# WebView
A widget that can display a web page. Since this widget requires a lot of resources it's recommended to have no more than one instance at a time.

###### Extends `Widget`

## Methods

### postMessage(message, targetOrigin)

#### Parameters:

**message:** string, the message to send. Currently supports only strings.  
**targetOrigin:** string, the URL of the page that recieves the message. The message is only sent if the current document URL has the same scheme, domain and path. Use * to send to any URL.  
**Returns:** this  

Posts a web message to the underlying window object of the WebView. The website in the WebView can register for the message in the following fashion: window.addEventListener('message', callbackFunction). For more information see Window.postMessage() API.

## Properties

### html

**Type:** string

A complete HTML document to display. Always returns the last set value.

### url

**Type:** string

The URL of the web page to display. Relative URLs are resolved relative to 'package.json'. Returns empty string when content from html property is displayed.

## Events

### download

Fired when the WebView requests a download. The download event provides the properties url, mimeType, contentLength and contentDisposition. Supported only on Android.

#### Event Parameters

- **target:** this
The widget the event was fired on.

- **contentDisposition:** string
Indicates whether the download is expected to be displayed inline or to be downloaded as an attachment.

- **contentLength:** number
The size of the downloaded entity body.

- **mimeType:** string
The mime type of the resource to be downloaded.

- **url:** string
The URL of the resource to be downloaded.

### load

Fired when the url has been loaded.

### message

Fired when a web message has been sent via window.parent.postMessage(message, targetOrigin) from inside the WebView.

#### Event Parameters

- **target:** this
The widget the event was fired on.

- **data**: string
The sent message.

### navigate

Fired when the WebView is about to navigate to a new URL.

#### Event Parameters

- **target:** this
The widget the event was fired on.

- **preventDefault:** () => void
Call to intercept the navigation.

- **url:** string
The new URL the WebView is about to navigate to.

## Example
```
// Create a web view to show a web page

var urlInput = new tabris.TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  text: 'http://en.wikipedia.org'
}).on('accept', loadUrl).appendTo(tabris.ui.contentView);

var webview = new tabris.WebView({
  layoutData: {left: 0, top: [urlInput, 8], right: 0, bottom: 0}
}).appendTo(tabris.ui.contentView);

function loadUrl() {
  webview.url = urlInput.text;
}

loadUrl();
```