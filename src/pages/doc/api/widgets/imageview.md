# ImageView
A widget to display an image.

###### Extends Widget

## Properties

### image

**Type:** Image

The image to display. Providing the width and height attributes on the image will resize it internally. When no dimensions are given the image will be loaded with its original size. Since the full size image might occupy a lot of memory, it's recommended to provide exact dimensions.

### scaleMode

**Type:** string, supported values: `auto`, `fit`, `fill`, `stretch`, `none`, default: `auto`

###### How to scale the image.

- `fit` will scale the image proportionally to fit into the view, possible leaving some empty space at the edges. That is, the image will be displayed as large as possible while being fully contained in the view.
- `fill` will scale the image proportionally to fill the entire view, possibly cutting off parts of the image. That is, the image will be displayed as small as possible while covering the entire view.
- `auto` will scale down the image to fit into the view if it is too large, but it won't scale up a smaller image.
- `stretch` will resize the image to the actual bounds of the image view.
- `none` will not resize the image at all. The image will be displayed in its original size.  
### tintColor

**Type:** Color

A color to change the image appearance. All opaque parts of the image will be tinted with the given color. Set to initial to remove the effect. Available on iOS and Android 5.0+.

## Events

### load

Fired when the image loading has finished.

#### Event Parameters

**target**: this
The widget the event was fired on.

**error**: boolean
Contains the final status of the loading process

## Example  
```
// Display images with different scale modes

var createImageView = function(scaleMode) {
  new tabris.ImageView({
    left: 10, top: 'prev() 10', width: 250, height: 100,
    image: {src: 'images/target_200.png'},
    background: '#aaaaaa',
    scaleMode: scaleMode
  }).appendTo(tabris.ui.contentView);
};

createImageView('fit');
createImageView('none');
createImageView('fill');
```