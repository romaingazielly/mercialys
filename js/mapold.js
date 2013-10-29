var map;
var marker;
var paris = new google.maps.LatLng(48.833, 2.333);
var france = new google.maps.LatLng(46.85, 1.7254880);
var markers = [];
var iterator = 0;

// Activation du rafraichissement visuel
google.maps.visualRefresh = true;

// Coordonnées des centres
var marqueurs = [
	[
	// Grandes surfaces spécialisées
	new google.maps.LatLng(48.833, 2.333),
	new google.maps.LatLng(48.100, -1.667),
	new google.maps.LatLng(48.067, -0.750),
	new google.maps.LatLng(47.383, 0.700),
	new google.maps.LatLng(45.433, 4.383)
	],
	[
	// Centre Local De Proximité
	new google.maps.LatLng(50.433, 2.833),
	new google.maps.LatLng(43.700, 7.267),
	new google.maps.LatLng(48.583, 7.750),
	new google.maps.LatLng(41.917, 8.717),
	new google.maps.LatLng(42.683, 9.433)
	],
	[
	// Surface Alimentaire
	new google.maps.LatLng(48.833, 2.333),
	new google.maps.LatLng(48.100, -1.667),
	new google.maps.LatLng(48.067, -0.750),
	new google.maps.LatLng(47.383, 0.700),
	new google.maps.LatLng(45.433, 4.383)
	],
	[
	// Grand centre régionnal
	new google.maps.LatLng(50.433, 2.833),
	new google.maps.LatLng(43.700, 7.267),
	new google.maps.LatLng(48.583, 7.750),
	new google.maps.LatLng(41.917, 8.717),
	new google.maps.LatLng(42.683, 9.433)
	],
	[
	// Grand centre commercial
	new google.maps.LatLng(48.833, 2.333),
	new google.maps.LatLng(48.100, -1.667),
	new google.maps.LatLng(48.067, -0.750),
	new google.maps.LatLng(47.383, 0.700),
	new google.maps.LatLng(45.433, 4.383)
	],
	[
	// Centre détenu en partenariat
	new google.maps.LatLng(50.433, 2.833),
	new google.maps.LatLng(43.700, 7.267),
	new google.maps.LatLng(48.583, 7.750),
	new google.maps.LatLng(41.917, 8.717),
	new google.maps.LatLng(42.683, 9.433)
	],
];

// Init de la map
function initialize() {

	var mapOptions = {
		zoom: 6,
		scrollwheel: false,
    	center: france,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	$('#mercialysMap area').on('click', function() {
		clearOverlays();
		var id = $(this).attr('id').substr(4);
		var coords = $(this).attr('coords').split(",");

		drop(marqueurs[parseInt(id)], parseInt(coords[0]));
	});
}

// Positionne chaque marqueur
// ============================================
function drop(id, coords) {
	console.log(id);
	for (var i = 0; i < id.length; i++) {
		setTimeout(function() {
			addMarker(id, coords);
		}, i * 200);
	}
}

function addMarker(id, coords) {
	var iconMarker = new google.maps.MarkerImage(
		'images/map-legend.png',
    	new google.maps.Size(15,21),
    	new google.maps.Point(coords,0)
	);
	console.log(iterator);
	markers.push(new google.maps.Marker({
   		position: id[iterator],
    	map: map,
    	icon: iconMarker,
    	animation: google.maps.Animation.DROP
  	}));

  	google.maps.event.addListener(markers[iterator], 'click', function(evenement){
      // affichage position du marker
      console.log(evenement.latLng);
      console.log(bulles[0]);
    });

	iterator++;
}

function clearOverlays() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers = [];
  iterator = 0;
}
// ============================================
google.maps.event.addDomListener(window, 'load', initialize);