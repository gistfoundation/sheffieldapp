var sub_nav_menu = require('lib/view/sub_nav_menu'); 

exports.getWindow = function() {

  var settings_win = Titanium.UI.createWindow({  
    title:'Settings',
    backgroundColor:'#fff'
  });

  settings_win.add(sub_nav_menu.getView());
  
  return settings_win;
}