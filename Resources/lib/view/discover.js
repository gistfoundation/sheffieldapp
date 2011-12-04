
var sub_nav_menu = require('lib/view/sub_nav_menu'); 
var discover_main = require('lib/view/discover_main'); 

exports.getWindow = function() {

  var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
  });

  win1.add(discover_main.getView());
  win1.add(sub_nav_menu.getView());
  
  return win1;
}