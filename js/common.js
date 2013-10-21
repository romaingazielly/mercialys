$(function(){
	/*--Detecter le largeur de la fenetre--*/
	$(window).resize(function(){
		getScreenSize();
	});
	getScreenSize();
	/*------------------*/
		
	blocCentreCo();
	btnScrollTop();
	sliderFoot();
	
	$('.people ol a').hover(function(){
		$(this).find('hr').stop().animate({width:185});
	}, function(){
		$(this).find('hr').stop().animate({width:30});
	});
	
	$('#slider-home #form-slider-home ul li a').hover(function(){
		$(this).parent().stop().animate({ backgroundPositionY: -20 }, 200);
	}, function(){
		$(this).parent().stop().animate({ backgroundPositionY: 0 }, 200);
	});
	
	$('#social-bottom li').hover(function(){
		var thisID = $(this).attr('id');
		if(thisID == 'sb-linkedin'){
			$(this).find('.pic-social').stop().animate({ backgroundPositionY: -28 }, 200);
		}
		if(thisID == 'sb-viadeo'){
			$(this).find('.pic-social').stop().animate({ backgroundPositionY: -32 }, 200);
		}
		if(thisID == 'sb-twitter'){
			$(this).find('.pic-social').stop().animate({ backgroundPositionY: -26 }, 200);
		}
		
	}, function(){
		$(this).find('.pic-social').stop().animate({ backgroundPositionY: 0 }, 200);
	});
	
});


/*-----------OBTENIR LA LARGEUR DE LA FENETRE SUR TOUS LE SITE---------*/
var widthScreen;
function getScreenSize(){
	widthScreen = $(window).width();
	docHeightScreen = $(document).height();	
	if(widthScreen < 940){
		$('body').removeClass().addClass('thiisipad thiisfluide');
	}
	if(widthScreen < 600){
		$('body').removeClass().addClass('thiismobile thiisfluide');
	}
	if(widthScreen > 940){
		$('body').removeClass().addClass('thisisdesktop');	
	}
}


/*-----------bouton retour haut---------*/
function btnScrollTop(){
 	var docHeight = $(document).height();
 
 	$('body').append('<div class="btn-return-top"></div>');	
 	
 	$(".btn-return-top").on("click", function(e){ 	
		$('body, html').animate({scrollTop : 0},'slow');
		e.preventDefault(); 	 
 	}); 	
 	
 	$(document).scroll(function() {
 		var docScroll = $(document).scrollTop();
  		if(docScroll > 800){
  			$('.btn-return-top').fadeIn();	
  		}
  		else{
  			$('.btn-return-top').fadeOut();
  		}
	});
}

var stepFoota = 0;
var numberElemFoota = 0;

/*------SLIDER FOOTA-------------*/
function sliderFoot(){
	$(".move-foot-slider .actu-slider-f:first-child").clone().appendTo('.move-foot-slider'); 
	numberElemFoota = $('.actu-slider-f').length;
	start_Foota();
}
function sliderFootaNext(){    
	stepFoota++;
	if(stepFoota < numberElemFoota-1){
	    updateSliderFoota();		
	}  
    else{	
		$('.move-foot-slider').animate({top:- 15*stepFoota}, 200, 'easeOutQuint', function(){
			$('.move-foot-slider').css({top:0});
		});	
		stepFoota = 0;
	}    
}
function updateSliderFoota(){
	$('.move-foot-slider').animate({top:- 15*stepFoota}, 200, 'easeOutQuint');
}
function start_Foota(){
      intval = window.setInterval('sliderFootaNext()',4000);
}


/*------MAP---*/
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
	
	$('#map-blue').click(function(e){
		e.preventDefault();

		if(curr != 'blue') {
			$('#map-mercialys-pointer').animate({backgroundPositionX: '7px'});
			$('#map-mercialys-title').fadeOut('fast', function(){
				$(this).html('Centre détenu en partenariat').css({'color':'#575bbb'}).fadeIn();
				curr = 'blue';
			});
		}
	});
}



/*-----------MENU MOBILE--------------*/
var menu;
var menuButton;

$(window).load(function(){
    navTop = $("#nav-site");
    menu = $("#nav-site .first-level");
    menuButton = $("<div class='btn-voir-menu'></div>");
    menuButton.click(function(e){
    	$('html, body').scrollTop(0);
    	showMenu();	
    	e.preventDefault();
    });
    $('#header').append(menuButton);

	$('.btn-voir-menu').on("click", function(e){ 	
		$('#nav-site').css({display:'block', height:docHeightScreen}).animate({left:0});
		$('body').append('<div class="btn-return"></div>');	
		//$('.btn-return').css({height:docHeightScreen, width:})	
	});

})
function showMenu (event) {
    if (menu.is(":visible"))
        menu.slideUp({complete:function(){$(this).css('display',''); $('.menu').removeClass('menu-selected');}});
    else
        menu.slideDown();
        $('.menu').addClass('menu-selected');
}

/*--------------NE PAS OUBLIER------------*/
function reInitMenu(){
	$('#nav-site').css({height:48});
}
/*--------------NE PAS OUBLIER------------*/



