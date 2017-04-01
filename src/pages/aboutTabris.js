var _colour = require("./../data/colour.json");
var _string = require("./../data/string.json");
var _data = require("./../data/data.json");

exports.create = function() { 
  var page = new tabris.Page({
    top:0, left:0,right:0, bottom: 0,
    title: 'About Tabris.js',
    background: _colour.toolbar
  });
  var aboutLabel = new tabris.TextView({
  	centerX:0,centerY:0,
    markupEnabled: true,
    alignment: 'center',
    text: '<b>Tabris.js is brought to you<br/>by EclipseSource</b><br/><br/>All rights reserved.',
    textColor:"#fff"
  }).appendTo(page);
  var imageView = new tabris.ImageView({
    opacity: 1,
    image: { src: 'src/images/icons/tabris.png'},
    top:0, left:0,right:0, bottom: [aboutLabel, 20]
  }).appendTo(page);
  var tabrisJSVersionLabel = new tabris.TextView({
    alignment: 'center',
    text: "version: 2.0.1-beta2",
    font:"bold 15px italic monospace",
    textColor: _colour.white,
    top:[aboutLabel, 10],
    centerX:0
  }).appendTo(page);
  var button = new tabris.Button({
  right:5,left: 5, bottom:5,
  textColor: _colour.toolbar,
  font:"bold 13px",
  background:_colour.white,
  text: 'Show LICENCE'
}).on('select',function(){
	var lisence = new tabris.TextView({
		top:0, left:0,right:0, bottom: 0,
});
 navigator.notification.alert(_string.licence, beep, 'Licence', ['Close']);
 function beep(){
return;
};
}).appendTo(page);
return  page; 
};