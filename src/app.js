var _colour = require("./data/colour.json");
var _string = require("./data/string.json");
var _data = require("./data/data.json");
var marked = require("./marked/lib/marked.js");
var nav = require("./pages/nav.js");
var home = require("./pages/home.js");

var _content = tabris.ui.contentView;
tabris.ui.drawer.enabled = true;
tabris.ui.drawer.background = _colour.white;
tabris.ui.statusBar.background = _colour.statusBar;
StatusBar.backgroundColorByHexString(_colour.statusBar);
tabris.ui.statusBar.theme = "dark";

var navigation = nav.navigation().appendTo(_content);
home.create().appendTo(navigation);

var imageView = new tabris.ImageView({
    left: 0, right:0,top: 0, 
    image:{src: 'src/images/icons/landscape.jpg'}
  }).appendTo(tabris.ui.drawer);
  new tabris.Composite({
  left: 0, top: [imageView, 8], right: 0, 
  height:8,
  background: _colour.white
 }).appendTo(tabris.ui.drawer);

[{title: 'Home', page:'home', img:'src/images/icons/home-variant.png'},{title: 'About Developer', page:'aboutDev', img:'src/images/icons/face.png'}, {title: 'About Tabris', page:'aboutTabris', img:'src/images/icons/information.png'},{title: 'Credits', page:'credits', img:'src/images/icons/book-open-page-variant.png'}].
  forEach(function(item){
  createPageSelector(item);
  });
  
  function createPageSelector(item){
var cell = new tabris.Composite({
  left: 0, top: 'prev()', right: 0, 
  height:59,
  background: _colour.white
 }).appendTo(tabris.ui.drawer);
  var imageView = new tabris.ImageView({
    left: 20, top: 10, bottom: 10,
    image : {src: item.img ,scale:2}
  }).appendTo(cell);
  var textView = new tabris.TextView({
    left: [imageView, 30], centerY: 0,
    font: 'bold 15px monospace',
    textColor: _colour.dark,
    text : item.title
  }).appendTo(cell);
  new tabris.Composite({
  left: 0, top: [cell, 0], right: 0, 
  height:1,
  background: _colour.white
 }).appendTo(tabris.ui.drawer);
cell.on('tap', function(widget, event) {
  tabris.ui.drawer.close();
  navigation.pages().dispose();
  (require("./pages/"+item.page+".js")).create().appendTo(navigation);
})
    .on('touchstart', function({target}) {
	target.background = _colour.offwhite;
	textView.textColor = _colour.toolbar;
})
	  .on('touchend', function({target}) {
	target.background = _colour.white;
	textView.textColor = _colour.white;
});
};
