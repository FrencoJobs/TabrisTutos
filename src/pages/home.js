var _colour = require("./../data/colour.json");
var _string = require("./../data/string.json");
var _data = require("./../data/data.json");
var marked = require("./../marked/lib/marked.js");

exports.create = function(){
var page = new tabris.Page({
title: _string.title
});
var tabFolder = new tabris.TabFolder({
  left: 0, right: 0,
  background: _colour.tabFolder,
  textColor: _colour.white,
  paging:true
}).appendTo(page);

window.tutos = new tabris.Tab({
    image:{src:"src/images/icons/book.png",scale:1},
    background: _colour.white
  }).appendTo(tabFolder);
window.snips = new tabris.Tab({
	image:{src:"src/images/icons/xml.png",scale:1},
    background: _colour.white
  }).appendTo(tabFolder);
 
  createCollectionView(_data.tutos,"src/images/icons/book-open.png","About tabris'"+" ",tutos);
  createCollectionView(_data.snips,"src/images/icons/language-javascript.png","Snippet for"+" ",snips);
return page;
};
//FUNCS
function createCollectionView(Item,SRC,DescText,TAB){
	var blank = new tabris.Composite({
      left: 0, bottom: 0, right: 0, right:0,
      background: _colour.offwhite
    }).appendTo(TAB);
var collectionView = new tabris.CollectionView({
  left: 10, top: 10, right: 10, bottom: 0,
  items: Item,
  itemHeight: 100,
  background : _colour.white,
  initializeCell: function(cell) {
  new tabris.Composite({
      left: 0, top: 0, right: 0, height: 2,
      background: _colour.toolbar
    }).appendTo(cell);
  var imageView = new tabris.ImageView({
  	image:{src: SRC, height:40},
left:10,top:25
}).appendTo(cell);
    var nameTextView = new tabris.TextView({
      left: [imageView, 20],top:12,
      textColor: _colour.toolbar,
      font: 'light 15px'
    }).appendTo(cell);
    var descTextView = new tabris.TextView({
      left: [imageView, 20],top:[nameTextView, 10],
      textColor: _colour.desc,
      font: '14px'
    }).appendTo(cell);
    new tabris.Composite({
      left: 0, bottom: 0, right: 0, height: 10,
      background: _colour.offwhite
    }).appendTo(cell);
    cell.on('change:item', function({value: item}) {
    	nameTextView.text = item.title;
    descTextView.text = DescText +item.title;
    	});
  }
  }).on('select', function({item}) {
	if(TAB == tutos){
var tutosView = new tabris.Composite({
  left: 0, top: 0, bottom: 0, right: 0,
  background: _colour.white
}).appendTo(tabris.ui.contentView);
var navFortutos = new tabris.Composite({
  left: 0, top: 0, right: 0,
  height: 55,
  background: _colour.toolbar 
}).appendTo(tutosView);
var backComposite = new tabris.Composite({
  left: 0, top: 0, bottom:0,
  background: _colour.toolbar
 }).on('tap', function(target, widget) {
    	tutosView.dispose();
}).appendTo(navFortutos);
    var back = new tabris.ImageView({
    left:15,top: 15,
    image:{src:'src/images/icons/ic_back.png', scale:4}
  }).appendTo(backComposite);
  var title = new tabris.TextView({
      left: [back, 10],top:13,
      textColor: _colour.white,
      font: '20px',
      text: item.title
    }).appendTo(backComposite);
    var shareComposite = new tabris.Composite({
  right: 0, top: 0, bottom:0,
  background: _colour.toolbar
  }).appendTo(navFortutos);
    var share = new tabris.ImageView({
    right:17,top: 17,bottom:17,
    image:{src:'src/images/icons/ic_share.png', scale:4}
  }).appendTo(shareComposite);
var xhrCSS = new window.XMLHttpRequest();
  xhrCSS.onreadystatechange = function() {
    if (xhrCSS.readyState === xhrCSS.DONE) {
         var css = xhrCSS.responseText;
  var xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        var data = xhr.responseText;
        shareComposite.on('tap', function() {
   window.plugins.socialsharing.share(data);
   });
        var html = marked(data);
        var webview = new tabris.WebView({
  layoutData: {left: 0, top: [navFortutos,0],right: 0, bottom: 0},
  html:'<head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"><style>' + css + '</style></head><body><article id="content" class="markdown-body">' + html + '</article></body><p id="end">...</p>'
}).appendTo(tutosView);
    }
  };
  xhr.open('GET', '././src/pages/doc/' + item.url);
  xhr.send();
    }
  };
  xhrCSS.open('GET', '././src/pages/css/marked.css');
  xhrCSS.send();
} else {
var snipsView = new tabris.Composite({
  left: 0, top: 0, bottom: 0, right: 0,
  background: _colour.white
}).appendTo(tabris.ui.contentView);
var navForsnips = new tabris.Composite({
  left: 0, top: 0, right: 0,
  height: 55,
  background: _colour.toolbar
}).appendTo(snipsView);
var backComposite = new tabris.Composite({
  left: 0, top: 0, bottom:0,
  background: _colour.toolbar
 }).on('tap', function(target, widget) {
    	snipsView.dispose();
}).appendTo(navForsnips);
    var back = new tabris.ImageView({
    left:15,top: 15,
    image:{src:'src/images/icons/ic_back.png', scale:4}
  }).appendTo(backComposite);
  var title = new tabris.TextView({
      left: [back, 10],top:13,
      textColor: _colour.white,
      font: '20px',
      text: item.title + ".js"
    }).appendTo(backComposite);
    var shareComposite = new tabris.Composite({
  right: 0, top: 0, bottom:0,
  background: _colour.toolbar
  }).appendTo(navForsnips);
    var share = new tabris.ImageView({
    right:17,top: 17,bottom:17,
    image:{src:'src/images/icons/ic_share.png', scale:4}
  }).appendTo(shareComposite);
var snipsCSS = new window.XMLHttpRequest();
  snipsCSS.onreadystatechange = function() {
    if (snipsCSS.readyState === snipsCSS.DONE) {
         var snipscss = snipsCSS.responseText;
  
  var xhrSNIPS = new window.XMLHttpRequest();
  xhrSNIPS.onreadystatechange = function() {
    if (xhrSNIPS.readyState === xhrSNIPS.DONE) {
        var snip = xhrSNIPS.responseText;
        shareComposite.on('tap', function() {
   window.plugins.socialsharing.share(snip);
   });
        var webview = new tabris.WebView({
  layoutData: {left: 0, top: [navForsnips, 0], right: 0, bottom: 0},
  html:'<head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">' + snipscss + '</head><body><br/><pre><code class="language-javascript">' + snip + '</code></pre></body><p id="end">...</p>'
}).appendTo(snipsView);
    }
  };
  xhrSNIPS.open('GET', '././src/pages/snips/'+ item.url);
  xhrSNIPS.send();
    }
    };
  snipsCSS.open('GET', '././src/pages/snips/html/snips.html');
  snipsCSS.send();
}
}).appendTo(blank);
};
