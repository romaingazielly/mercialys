var step = 1;
var myMove = 0;
var lengthItem = 0;

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