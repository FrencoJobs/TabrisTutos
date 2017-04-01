# CanvasContext
The CanvasContext is used for drawing onto the canvas. It is a subset of the HTML5 CanvasRenderingContext2D.

## Methods

arc(x, y, radius, startAngle, endAngle, anticlockwise?)

### Parameters:

**x**: number, the x coordinate of the arc's center.

**y**: number, the y coordinate of the arc's center.

**radius**: number, the arc's radius.

**startAngle**: number, the angle in radians at which the arc starts, measured clockwise from the positive x axis.

**endAngle**: number, the angle in radians at which the arc ends, measured clockwise from the positive x axis.

**anticlockwise?**: boolean, if true, causes the arc to be drawn counter-clockwise between the two angles.
Adds an arc to the path which is centered at `(x, y)` position with radius r starting at startAngle and ending at endAngle going in the given direction by anticlockwise (defaulting to clockwise).

## beginPath()

Starts a new path by emptying the list of sub-paths.

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

### Parameters:

**cp1x**: number, the x axis of the coordinate for the first control point.

**cp1y**: number, the y axis of the coordinate for the first control point.

**cp2x**: number, the x axis of the coordinate for the second control point.

**cp2y**: number, the y axis of the coordinate for the second control point.

**x**: number, the x axis of the coordinate for the end point.

**y**: number, the y axis of the coordinate for the end point.
Adds a cubic Bézier curve to the path. The starting point is the last point in the current path.

## clearRect(x, y, width, height)

### Parameters:

**x**: number, the x axis of the rectangle's upper-left corner.

**y**: number, the y axis of the rectangle's upper-left corner.

**width**: number, the rectangle's width.

**height**: number, the rectangles height.
Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent, erasing any previously drawn content.

## closePath()

Adds a straight line from the current point to the start of the current sub-path.

## createImageData(width, height)

### Parameters:

**width**: number, the width of the new ImageData object.

**height**: number, the height of the new ImageData object.

**Returns**: ImageData

creates a new, blank ImageData object with the specified dimensions. All of the pixels in the new object are transparent black.

## createImageData(imageData)

### Parameters:

**imageData**: ImageData, an existing ImageData object from which to copy the width and height.

**Returns**: ImageData

creates a new, blank ImageData object with the same dimensions as the specified existing ImageData object. All of the pixels in the new object are transparent black.

## fill()

Fills the current or path with the current fill style.

## fillRect(x, y, width, height)

**Parameters**:

**x**: number, the x axis of the rectangle's upper-left corner.

**y**: number, the y axis of the rectangle's upper-left corner.

**width**: number, the rectangle's width.

**height**: number, the rectangles height.
draws a filled rectangle at (x, y) position whose size is determined by width and height. and whose color is determined by the fillStyle attribute.

## fillText(text, x, y)

**Parameters:**

**text**: string, the text to render.

**x**: number, the x axis of the coordinate for the text starting point.

**y**: number, the y axis of the coordinate for the text starting point.
Fills a given text at the given `(x, y)` position using the current textAlign and textBaseline values.

## getImageData(x, y, width, height)

### Parameters:

**x**: number, the x axis of the rectangle's upper-left corner.

**y**: number, the y axis of the rectangle's upper-left corner.

**width**: number, the rectangle's width.

**height**: number, the rectangle's height.

**Returns**: ImageData

Returns an ImageData object representing the underlying pixel data for the area of the canvas denoted by the given rectangle.

## lineTo(x, y)

### Parameters:

**x**: number, the x axis of the coordinate for the end of the line.

**y**: number, the y axis of the coordinate for the end of the line.
Connects the last point in the sub-path to the (x, y) coordinates with a straight line.

## moveTo(x, y)

### Parameters:

**x**: number, the x axis of the point.

**y**: number, the y axis of the point.
Moves the starting point of a new sub-path to the (x, y) coordinates.

## putImageData(imageData, x, y)

### Parameters:

**imageData**: ImageData, an ImageData object containing the array of pixel values.

**x**: number, x-coordinate of the upper-left corner of the image data rectangle

**y**: number, y-coordinate of the upper-left corner of the image data rectangle
Paints data from the given ImageData object onto the bitmap at coordinates (x, y).

## quadraticCurveTo(cpx, cpy, x, y)

### Parameters:

**cpx**: number, the x axis of the coordinate for the control point.

**cpy**: number, the y axis of the coordinate for the control point.

**x**: number, the x axis of the coordinate for the end point.

**y**: number, the y axis of the coordinate for the end point.
Adds a quadratic Bézier curve to the path. The starting point is the last point in the current path.

## rect(x, y, width, height)

### Parameters:

**x**: number, the x axis of the rectangle's upper-left corner.

**y**: number, the y axis of the rectangle's upper-left corner.

**width**: number, the rectangle's width.

**height**: number, the rectangles height.
Creates a path for a rectangle with the top-left corner at (x, y)

## restore()

Restores the most recently saved canvas state by popping the top entry in the drawing state stack.

## rotate(angle)

### Parameters:

**angle**: number, The angle to rotate clockwise in radians.
Adds a rotation to the transformation matrix.

## save()

Saves the entire state of the canvas by pushing the current state onto a stack.

## scale(x, y)

### Parameters:

**x**: number, scaling factor in the horizontal direction.

**y**: number, scaling factor in the vertical direction.
Adds a scaling transformation to the canvas units by x horizontally and by y vertically.

## setTransform(a, b, c, d, e, f)

### Parameters:

**a**: number, horizontal scaling.

**b**: number, horizontal skewing.

**c**: number, vertical skewing.

**d**: number, vertical scaling.

**e**: number, horizontal moving.

**f**: number, vertical moving.
resets (overrides) the current transformation to the identity matrix and then invokes a transformation described by the arguments of this method. The matrix has the following format:
[[a, c, e],
[b, d, f],
[0, 0, 1]]

## stroke()

Strokes the current path with the current stroke style.

## strokeRect(x, y, width, height)

### Parameters:

**x**: number, the x axis of the rectangle's upper-left corner.

**y**: number, the y axis of the rectangle's upper-left corner.

**width**: number, the rectangle's width.

**height**: number, the rectangles height.
draws the outline of a rectangle at (x, y) position whose size is determined by width and height using the current stroke style.

## strokeText(text, x, y)

### Parameters:

**text**: string, the text to render.

**x**: number, the x axis of the coordinate for the text starting point.

**y**: number, the y axis of the coordinate for the text starting point.
Strokes a given text at the given (x, y) position using the current textAlign and textBaseline values.

## transform(a, b, c, d, e, f)

### Parameters:

**a**: number, horizontal scaling.

**b**: number, horizontal skewing.

**c**: number, vertical skewing.

**d**: number, vertical scaling.

**e**: number, horizontal moving.

**f**: number, vertical moving.
Multiplies the current transformation with the matrix described by the arguments of this method. The matrix has the following format:
[[a, c, e],
[b, d, f],
[0, 0, 1]]

## translate(x, y)

### Parameters:

**x**: number, the distance to move in the horizontal direction.

**y**: number, the distance to move in the vertical direction.
Adds a translation transformation by moving the canvas and its origin x horizontally and y vertically on the grid.

## Properties

### fillStyle

**Type:** Color
Specifies the color to use inside shapes.

### font

**Type:** Font
Specifies the current text style being used when drawing text.

### lineCap

**Type:** string, supported values: butt, round, square
Determines how the end points of every line are drawn.

### lineJoin

**Type:** string, supported values: bevel, round, miter
Determines how two connecting segments in a shape are joined together.

### lineWidth

**Type:** number
The thickness of lines in space units.

### strokeStyle

**Type:** Color
Specifies the color to use for the lines around shapes.

### textAlign

**Type:** string, supported values: `left`, `right`, `center`,` start`, `end`
Specifies the current text alignment being used when drawing text.

### textBaseline

**Type:** string, supported values: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`
Specifies the current text baseline being used when drawing text.