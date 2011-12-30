var discover = require('lib/view/discover')
var map = require('lib/view/map')
var settings = require('lib/view/settings')

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// Our root application consists of a tab controller.
// Each tab contains it's own window that will hold it's own state.

//
// create base UI tab and root window
//
var discover_tab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Discover',
    window:discover.getWindow()
});

//
// create controls tab and root window
//

var map_tab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Map',
    window:map.getWindow()
});

var settings_tab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Settings',
    window:settings.getWindow()
});

//  add tabs
//
tabGroup.addTab(discover_tab);  
tabGroup.addTab(map_tab);  
tabGroup.addTab(settings_tab);  

exports.show = function() {
  // open tab group
  tabGroup.open();
};

