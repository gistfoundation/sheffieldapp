var sub_nav_menu = require('lib/view/sub_nav_menu'); 

exports.getWindow = function() {

  var win1 = Titanium.UI.createWindow({  
    title:'Settings',
    backgroundColor:'#fff'
  });

  var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:37.389569, longitude:-122.050212, latitudeDelta:0.1, longitudeDelta:0.1},
    animate:true,
    regionFit:true,
    userLocation:false
  });
  win1.add(mapview);

  win1.add(sub_nav_menu.getView());
  
  return win1;
}