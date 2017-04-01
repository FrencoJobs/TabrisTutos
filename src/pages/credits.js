var _colour = require("./../data/colour.json");
var _string = require("./../data/string.json");
var _data = require("./../data/data.json");
var marked = require("./../marked/lib/marked.js");

exports.create = function() { 
var page = new tabris.Page({title: "Credits"}); 
var xhrCSS = new window.XMLHttpRequest();
  xhrCSS.onreadystatechange = function() {
    if (xhrCSS.readyState === xhrCSS.DONE) {
         var css = xhrCSS.responseText;
  var xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        var data = xhr.responseText;
        var html = marked(data);
        var webview = new tabris.WebView({
  layoutData: {left: 0, top: 0,right: 0, bottom: 0},
  html:'<head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"><style>' + css + '</style></head><body><article id="content" class="markdown-body">' + html + '</article></body>'
}).appendTo(page);
    }
  };
  xhr.open('GET', '././src/pages/credits.md');
  xhr.send();
    }
  };
  xhrCSS.open('GET', '././src/pages/css/crd-marked.css');
  xhrCSS.send();
return  page; 
};