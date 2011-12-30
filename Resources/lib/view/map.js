var sub_nav_menu = require('lib/view/sub_nav_menu'); 

exports.getWindow = function() {

  var mapview_win = Titanium.UI.createWindow({  
    title:'Map',
    backgroundColor:'#fff'
  });

  var longitude = 0;
  var latitude = 0;
  var altitude = 0;
  var heading = 0;
  var accuracy = 0;
  var speed = 0;
  var timestamp = 0;
  var altitudeAccuracy = 0;


  Titanium.Geolocation.getCurrentPosition(function(e) {
	if (!e.success || e.error)
	{
		currentLocation.text = 'error: ' + JSON.stringify(e.error);
		Ti.API.info("Code translation: "+translateErrorCode(e.code));
		alert('error ' + JSON.stringify(e.error));
		return;
	}
	longitude = e.coords.longitude;
	latitude = e.coords.latitude;
	altitude = e.coords.altitude;
	heading = e.coords.heading;
	accuracy = e.coords.accuracy;
	speed = e.coords.speed;
	timestamp = e.coords.timestamp;
	altitudeAccuracy = e.coords.altitudeAccuracy;
	//Ti.API.info('speed ' + speed);
	// currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;
	//Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
  });

  var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:latitude, longitude:longitude, latitudeDelta:0.1, longitudeDelta:0.1},
    animate:true,
    regionFit:true,
    userLocation:true
  });
  
  mapview_win.add(mapview);
  mapview_win.add(sub_nav_menu.getView());
  
  return mapview_win;
}