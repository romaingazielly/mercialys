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
	enSavoirPlus();
	
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
	var curr = 0;
	var clikOk = true;

	$('#mercialysMap area').click(function(e){
		e.preventDefault();

		if(clikOk) {
			clikOk = false;
			var $this = $(this);
			var id = $this.attr('id').substr(4);
			var pos = $this.attr('rel');

			if(curr != id) {
				$('#map-mercialys-pointer').animate({backgroundPositionX: pos});
				$('#legend-'+curr).fadeOut('fast', function(){
					$('#legend-'+id).fadeIn();
					curr = id;
				});
			}
			clikOk = true;
		}
	});
}


/*-----------POPIN--------------*/
function enSavoirPlus() {
	$('.enSavoirPlus').on('click', function(e){
		e.preventDefault();
		
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



