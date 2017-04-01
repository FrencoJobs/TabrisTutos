var _colour = require("./../data/colour.json");
var _string = require("./../data/string.json");
var _data = require("./../data/data.json");

exports.navigation = function(){
return new tabris.NavigationView({
  left: 0, top: 0, right: 0, bottom: 0,
  drawerActionVisible: true,
  toolbarColor: _colour.toolbar
});

};