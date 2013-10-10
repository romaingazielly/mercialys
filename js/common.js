$(function(){
	blocCentreCo();
	actualites();
});
function actualites() {
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
function blocCentreCo() {
	var curr = 'red';

	$('#map-red').click(function(e){
		e.preventDefault();

		if(curr != 'red') {
			$('#map-mercialys-pointer').animate({backgroundPositionX: '-124px'});
			$('#map-mercialys-title').fadeOut('fast', function(){
				$(this).html('Grande surface spécialisée').css({'color':'#b60d1c'}).fadeIn();
				curr = 'red';
			});
		}
	});

	$('#map-green').click(function(e){
		e.preventDefault();

		if(curr != 'green') {
			$('#map-mercialys-pointer').animate({backgroundPositionX: '-91px'});
			$('#map-mercialys-title').fadeOut('fast', function(){
				$(this).html('Centre local de Proximité').css({'color':'#b7d00d'}).fadeIn();
				curr = 'green';
			});
		}
	});

	$('#map-yellow').click(function(e){
		e.preventDefault();

		if(curr != 'yellow') {
			$('#map-mercialys-pointer').animate({backgroundPositionX: '-57px'});
			$('#map-mercialys-title').fadeOut('fast', function(){
				$(this).html('Surface alimentaire').css({'color':'#e7c22c'}).fadeIn();
				curr = 'yellow';
			});
		}
	});

	$('#map-black').click(function(e){
		e.preventDefault();

		if(curr != 'black') {
			$('#map-mercialys-pointer').animate({backgroundPositionX: '-24px'});
			$('#map-mercialys-title').fadeOut('fast', function(){
				$(this).html('Grand centre régional').css({'color':'#262219'}).fadeIn();
				curr = 'black';
			});
		}
	});

	$('#map-grey').click(function(e){
		e.preventDefault();

		if(curr != 'grey') {
			$('#map-mercialys-pointer').animate({backgroundPositionX: '9px'});
			$('#map-mercialys-title').fadeOut('fast', function(){
				$(this).html('Grand centre commercial').css({'color':'#5e5238'}).fadeIn();
				curr = 'grey';
			});
		}
	});
}