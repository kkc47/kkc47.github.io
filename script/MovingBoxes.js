/*
 * MovingBoxes demo script
 */

$(window).load(function(){
	
	$('.sliders').movingBoxes({
		startPanel   : 1,      // start with this panel
		reducedSize  : 0.5,    // non-current panel size: 80% of panel size
		wrap         : true,   // if true, the panel will "wrap" (it really rewinds/fast forwards) at the ends
		buildNav     : true,   // if true, navigation links will be added
		navFormatter : function(){ return "&#9679;"; } // function which returns the navigation text for each panel

		// width and panelWidth options removed in v2.2.2, but still backwards compatible
		// width        : 300,    // overall width of movingBoxes (not including navigation arrows)
		// panelWidth   : 0.5,    // current panel width

	});
	
	$('a.mb-scrollButtons').hide(); 


});