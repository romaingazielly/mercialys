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
		[new google.maps.LatLng(48.833, 2.333), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.100, -1.667), "Super Centre co", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.067, -0.750), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(47.383, 0.700), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(45.433, 4.383), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"]
		],
		[
		// Centre Local De Proximité
		[new google.maps.LatLng(47.833, 2.333), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.100, -1.667), "Super Centre com", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.067, -0.750), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(47.383, 0.700), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(45.433, 4.383), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"]
		],
		[
		// Surface Alimentaire
		[new google.maps.LatLng(48.833, 2.333), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.100, -1.667), "Super Centre commercial", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.067, -0.750), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(47.383, 0.700), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(45.433, 4.383), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"]
		],
		[
		// Grand centre régionnal
		[new google.maps.LatLng(48.833, 2.333), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.100, -1.667), "Carré Sud", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.067, -0.750), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(47.383, 0.700), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(45.433, 4.383), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"]
		],
		[
		// Grand centre commercial
		[new google.maps.LatLng(48.833, 2.333), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.100, -1.667), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.067, -0.750), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(47.383, 0.700), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(45.433, 4.383), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"]
		],
		[
		// Centre détenu en partenariat
		[new google.maps.LatLng(48.833, 2.333), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.100, -1.667), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(48.067, -0.750), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(47.383, 0.700), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"],
		[new google.maps.LatLng(45.433, 4.383), "C. Cial Géant Les Villages", "(Saint-Brieux - 22)", "http://www.adresse-du-centre.com"]
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
		var id = parseInt($(this).attr('id').substr(4));
		var coords = $(this).attr('coords').split(",");
		drop(marqueurs[id], coords[0]);
	});
}

// Positionne chaque marqueur
// ============================================
function drop(id, coord) {
	for (var i = 0; i < id.length; i++) {
		setTimeout(function() {
			addMarker(id, coord);
		}, i * 200);
	}
}

function addMarker(id, coord) {
	var iconMarker = new google.maps.MarkerImage(
		'images/map-legend.png',
    	new google.maps.Size(15,21),
    	new google.maps.Point(coord,0)
	);

	markers.push(new google.maps.Marker({
   		position: id[iterator][0],
    	map: map,
    	icon: iconMarker,
    	animation: google.maps.Animation.DROP
  	}));

  	var contentInfoWindow = '<div class="info-window"><h1>'+id[iterator][1]+'</h1>'+'<p>'+id[iterator][2]+'</p><p><a href='+id[iterator][3]+'>Voir la fiche du centre</a></p></div>';

  	markers.infowindow = new google.maps.InfoWindow({
      content: contentInfoWindow
	});

	var fuck = new google.maps.Marker({
      position: id[iterator][0],
      map: map,
      icon: iconMarker
	});


  	google.maps.event.addListener(markers[iterator], 'click', function(){
      // affichage position du marker
      markers.infowindow.close();
      markers.infowindow.open(map,fuck);
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