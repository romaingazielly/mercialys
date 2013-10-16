$(function(){
	blocCentreCo();
	btnScrollTop();
});


/*-----------bouton retour haut---------*/
function btnScrollTop(){
 	var docHeight = $(document).height();
 
 	$('body').append('<div class="btn-return-top"></div>');	
 	
 	$(".btn-return-top").on("click", function(e){ 	
		$('body, html').animate({scrollTop : 0},'slow');
		e.preventDefault(); 	 
 	}); 	
 	
 		var docScroll = $(document).scrollTop();
  		if(docScroll > 200){
  			$('.btn-return-top').fadeIn();	
  		}
  		else{
  			$('.btn-return-top').fadeOut();
  		}
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