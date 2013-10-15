var map;

$(function(){
	showFilter();
});

function showFilter() {
	var open = false;
	$('#actu-filtre-button').click(function(e){
		e.preventDefault();

		if(!open) {
			$(this).css({'background-position-x': -13});
			$('#actu-filter').animate({ 'height':290 }, 500, 'easeOutQuint', function(){
				open = true;
			});
		}
		else {
			$(this).css({'background-position-x': 80});
			$('#actu-filter').animate({ 'height':0 }, 500, 'easeOutQuint', function(){
				open = false;
			});
		}
	});
}

function initialize() {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(46.1318590, 3.4254880),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

