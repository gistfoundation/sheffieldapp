exports.getView = function() {

  var view = Titanium.UI.createView({
  	top:0,
	width:'auto',
	height:'auto',
	layout:'vertical',
	title:'Discover'
	// backgroundColor:'#f00'
  });

  // Label  
  view.add(
  	Ti.UI.createLabel({
            text: 'What do you want to do?',
            color: 'black'
  }));

  // Activity Type Spinner - See, Do, Learn, Everything
  var picker = Ti.UI.createPicker({
		type: Ti.UI.PICKER_TYPE_PLAIN,
		height: 'auto',
		selectionIndicator: true
  });
  picker.add(Ti.UI.createPickerRow({title:'See'}));
  picker.add(Ti.UI.createPickerRow({title:'Do'}));
  picker.add(Ti.UI.createPickerRow({title:'Learn'}));
  picker.add(Ti.UI.createPickerRow({title:'Everything'}));
  view.add(picker);
    
  return view;
};