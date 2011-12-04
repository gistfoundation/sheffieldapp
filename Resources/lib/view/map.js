var sub_nav_menu = require('lib/view/sub_nav_menu'); 

exports.getWindow = function() {

  var win1 = Titanium.UI.createWindow({  
    title:'Map',
    backgroundColor:'#fff'
  });

  var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    // region: {latitude:37.389569, longitude:-122.050212, latitudeDelta:0.1, longitudeDelta:0.1},
    animate:true,
    regionFit:true,
    userLocation:true
  });
  win1.add(mapview);

  //Titanium.Geolocation.getCurrentPosition(function(e) {
	//if (!e.success || e.error)
	//{
	//	currentLocation.text = 'error: ' + JSON.stringify(e.error);
	//	Ti.API.info("Code translation: "+translateErrorCode(e.code));
	//	alert('error ' + JSON.stringify(e.error));
	//	return;
	//}
	//var longitude = e.coords.longitude;
	//var latitude = e.coords.latitude;
	//var altitude = e.coords.altitude;
	//var heading = e.coords.heading;
	//var accuracy = e.coords.accuracy;
	//var speed = e.coords.speed;
	//var timestamp = e.coords.timestamp;
	//var altitudeAccuracy = e.coords.altitudeAccuracy;
	//Ti.API.info('speed ' + speed);
	//currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;
	//Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
  //});

  win1.add(sub_nav_menu.getView());
  
  return win1;
}