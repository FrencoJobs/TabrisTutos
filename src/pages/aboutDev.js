var _colour = require("./../data/colour.json");
var _string = require("./../data/string.json");
var _data = require("./../data/data.json");
var marked = require("./../marked/lib/marked.js");

exports.create = function() { 
var page = new tabris.Page({
title: "About Developer",
background: _colour.offwhite
}); 
var textComposite = new tabris.Composite({
left:10,right:10,top: 10,bottom:10,
background: _colour.snowwhite
}).appendTo(page);
var nav = new tabris.Composite({
  left: 0, top: 0, right: 0,
  height: 50,
  background: _colour.toolbar
}).appendTo(textComposite);
new tabris.TextView({
left:12,top:12,
font: 'bold 17px',
textColor: _colour.white,
text: 'About'
}).appendTo(nav);
var shareComposite = new tabris.Composite({
  right: 0, top: 0, bottom:0,
  background: _colour.toolbar
  }).appendTo(nav);
    var share = new tabris.ImageView({
    right:15,top: 15,bottom:15,
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
        var html = marked(data);
        
        shareComposite.on('tap', function() {
   window.plugins.socialsharing.share(data);
   });
   
        var webview = new tabris.WebView({
  left: 0, top: [nav , 0],right: 0, bottom: [follow,0],
  html:'<head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"><style>' + css + '</style></head><body><article id="content" class="markdown-body">' + html + '</article></body>'
}).appendTo(textComposite);
    }
  };
  xhr.open('GET', '././src/pages/about.md');
  xhr.send();
    }
  };
  xhrCSS.open('GET', '././src/pages/css/marked.css');
  xhrCSS.send();
  
var follow = new tabris.Composite({
  left: 0, bottom:0, right: 0,
  height: 50,
  background: _colour.followbutton
 }).on('tap',function(){
 	cordova.InAppBrowser.open('http://twitter.com/frencojobs', '_system', 'location=no');
}).appendTo(textComposite);
var logo = new tabris.ImageView({
left:12,top:12,
image: {src:'src/images/icons/twitter.png', scale:2}
}).appendTo(follow);
new tabris.TextView({
left:[logo,10],top:12,
font: 'bold 17px',
textColor: _colour.white,
text: 'Follow Me On Twitter'
}).appendTo(follow);
return  page; 
};
