var step = 1;
var myMove = 0;
var lengthItem = 0;

var stepSlider = 0;
var docWidth;
var widthSlide;/*Taille du slider*/
var numberElem;/*nbre d element a slider*/
var timerSlide = 5000;
var duringAnimate = 800;

$(function(){
	$(window).resize(function(){
		resizeSlide();
	});
	resizeSlide();
	initSlider();
	$('#form-slider-home select').uniform();
});
/*------SLIDER TOP HOME-------------*/

/*resize du slide*/
function resizeSlide(){
	windowWidth = $(window).width();
	if(windowWidth > 1498){
		widthSlide = 1101;
		$('.text-slider-home').css({left:279});
		$('#slider-home').addClass('center-slider-home');
	}
	else{
		widthSlide = windowWidth - 397;
		$('.text-slider-home').css({left:(windowWidth-940)/2})	
		$('#slider-home').removeClass('center-slider-home');
	}
	
	$('#my-slider-home, .article-s-home').css({width:widthSlide});
	$('#slider-move-home').css({left: -widthSlide*stepSlider});
}


function initSlider(){
	$("#slider-move-home .article-s-home:first-child").clone().appendTo('#slider-move-home'); 
	numberElem = $('.article-s-home').length;
	for (i = 0; i < numberElem-1; i++){
	   $('#bullet-slider').append('<div class="point-slider" id="point-slider-'+i+'"></div>');
	}
	$('.point-slider:first-child').addClass('selected');
	start_Int();
	
	$('.point-slider').click(function(){
		stepSlider = $(this).attr('id').substring('13');
		updatePointSlider();
	});
}

function sliderHomeNext(){    
	stepSlider++;
	if(stepSlider < numberElem-1){
	    updateSlider();		
	}  
    else{		
		$('#slider-move-home').animate({left:- widthSlide*stepSlider}, duringAnimate, 'easeOutQuint', function(){
			$('#slider-move-home').css({left:0});
		});
		stepSlider = 0;
	}  
	$('.point-slider').removeClass('selected');
	$('#point-slider-'+stepSlider).addClass('selected');    
}
function updateSlider(){
	$('#slider-move-home').animate({left:- widthSlide*stepSlider}, duringAnimate, 'easeOutQuint');
}
function updatePointSlider(){	
	stop_Int()
	$('#slider-move-home').animate({left:- widthSlide*stepSlider}, duringAnimate, 'easeOutQuint', function(){
		start_Int();
	});
	$('.point-slider').removeClass('selected');
	$('#point-slider-'+stepSlider).addClass('selected');
}
function start_Int(){
      intval = window.setInterval('sliderHomeNext()',timerSlide);
}
function stop_Int(){
      window.clearInterval(intval);
}




/*------module slide home-----*/
$(function(){
	$('.btn-next-home').click(function(){
		nextSlide()
	});
	$('.btn-prev-home').click(function(){
		prevSlide()
	});
	lengthItem = $('.slide-actu-home').length;
});

function nextSlide(){
	if(step < lengthItem){
		step ++;
		myMove += 620;
		$('.move-slide-actu').animate({left:-(myMove)}, 500, 'easeOutQuint');		
	}
	if(step == lengthItem){$('.btn-next-home').fadeOut('fast');}
	$('.btn-prev-home').fadeIn('fast');
}
function prevSlide(){
	if(step > 1){
		step --;
		myMove -= 620;
		$('.move-slide-actu').animate({left:-(myMove)}, 500, 'easeOutQuint');		
	}
	if(step == 1){$('.btn-prev-home').fadeOut('fast');}
	$('.btn-next-home').fadeIn('fast');
}

/*------module actu home-----*/
$(function(){
	$('.projet-home li').hover(function(){
		$(this).find('.content-proj').stop().animate({top:0}, 300)
			.find('.my-content-proj').stop().animate({opacity:1}, 300);
	}, function(){
		$(this).find('.content-proj').stop().animate({top:197}, 300)
			.find('.my-content-proj').stop().animate({opacity:0}, 300);
	});
});