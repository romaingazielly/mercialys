$(function(){
	initTri();
	
	$('.picto-audio a').click(function(e){
		$(this).parent().find('.audio-player').slideToggle();
		e.preventDefault();
	});
});

function initTri(){
	if($('.tri a.selected').is('.link-avenir')){
		$('.cursor-tri').css({left:-5, display:'block'});
	}
	else{
		$('.cursor-tri').css({left:53, display:'block'});
	}
	$('.tri a').hover(function(){
		if($(this).is('.link-avenir')){
			$('.cursor-tri').stop().animate({left:-5, display:'block'}, 'fast');
		}
		else{
			$('.cursor-tri').stop().animate({left:53, display:'block'}, 'fast');
		}		
	}, function(){
		if($('.tri a.selected').is('.link-avenir')){
			$('.cursor-tri').stop().animate({left:-5, display:'block'}, 'fast');
		}
		else{
			$('.cursor-tri').stop().animate({left:53, display:'block'}, 'fast');
		}		
	}).click(function(){
		$('.tri a').removeClass('selected');
		$(this).addClass('selected');
		if($(this).is('.link-avenir')){
			$('.cursor-tri').stop().animate({left:-5, display:'block'}, 'fast');
		}
		else{
			$('.cursor-tri').stop().animate({left:53, display:'block'}, 'fast');
		}
	});
}

var elemPopin;

$(function(){
	$('.link-confirme').click(function(e){
		elemPopin = $('.view-popin');
		popinForm();
		e.preventDefault();
	});
	$('.picto-presence').click(function(e){
		elemPopin = $(this).find('.view-popin');
		popinForm();
		e.preventDefault();
	});
	$('.picto-agenda').click(function(e){
		elemPopin = $(this).find('.view-agenda-popin');
		popinForm();
		e.preventDefault();
	});
	
});
function popinForm(){
    $('body').append('<div id="overlay-appear"></div>');
    $('#overlay-appear').css({
        height: $(document).height(),
        opacity: 0
    });
    $('#overlay-appear').fadeTo('fast',0.5);

    var content = elemPopin.html();
    $('body').append('<div class="popin-form">'+content+'</div>');

    var sizeElem = function() {
		var popin   = $('.popin-form');
		var w	    = $(window);
        contentScrollTop = w.scrollTop();
        contentScrollLeft = w.scrollLeft();
        popin.css( {
	    	top: (w.height()/2) + contentScrollTop - (popin.height()/2),
			left: (w.width()/2) + contentScrollLeft - (popin.width()/2)
		});
    }

    sizeElem();
	
    $(window).scroll(function(){
        sizeElem();
    }).resize(function(){
        sizeElem();
    });
	
	$('.inp-rad .rad-no').click(function(){
		$(this).parents('form').find('.no-form').slideDown();
		$(this).parents('form').find('.rad-yes input').attr('checked', false);
		$(this).find('input').attr('checked', true);
	});
	$('.inp-rad .rad-yes').click(function(){
		$(this).parents('form').find('.no-form').slideUp();
		$(this).parents('form').find('.rad-no input').attr('checked', false);
		$(this).find('input').attr('checked',true);
	});

	$('.close-kepopin, #overlay-appear').click(function(){
        closeKepopin();
        return false;
    });

}


function closeKepopin(){
	$('#overlay-appear').fadeOut('fast',function(){
        $(this).remove();
    });
    $('.popin-form').fadeOut('fast',function(){
        $(this).remove();
    });
}