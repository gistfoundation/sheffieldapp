


exports.getView = function() {
  var view = Titanium.UI.createView({
	width:100,
	height:20,
	bottom:0,
	backgroundColor:'#000'
  });
  
  view.add(
  	Ti.UI.createLabel({
            text: 'Sub Menu Option 1',
            color: 'black',
            width: 'auto',
            height: 'auto'
   }));
   
  return view;
};