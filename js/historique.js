
$(function(){
	/*--init bloc avant masonry--*/
	$('.item-historique').each(function(){
		var radomClass = Math.floor(Math.random() * 3) + 1;
		$(this).addClass('randomclass-'+radomClass);
	});	
	$('.item-historique:eq(1)').addClass('second-child');
	
	/*--init masonry--*/	
	var container1 = document.querySelector('#histo-1');
	var msnry = new Masonry( container1, {
	  columnWidth: 300,
	  itemSelector: '.item-historique'
	});	
	
	var container2 = document.querySelector('#histo-2');
	var msnry = new Masonry( container2, {
	  columnWidth: 300,
	  itemSelector: '.item-historique'
	});
	
	var container3 = document.querySelector('#histo-3');
	var msnry = new Masonry( container3, {
	  columnWidth: 300,
	  itemSelector: '.item-historique'
	});	
	positionMenu();
	$(window).scroll(function() {                 
	     positionMenu();                                                    
	});
});

/*--init bloc apres masonry--*/
$(window).load(function(){
	$('.item-historique').each(function(){
		var thisPosit = $(this).css('left');
		if(parseInt(thisPosit) > 10){$(this).attr('id','on-right');}
		else{$(this).attr('id','on-left');}
	});
	
	/*--nav historique--*/
	$('#nav-historique a').click(function(e){
		var myLink = $(this).attr('href').substring(1);  
		var position = $('#'+myLink).position();        
		$('body, html').animate({scrollTop : position.top + 30},'slow');
		$('#nav-historique a').removeClass('selected');                    
		$(this).addClass('selected');
		e.preventDefault(); 
	});

		
	$('.item-historique').waypoint(function() {
		var myId = $(this).attr('id');

		$(this).each(function(){
			var widthPoint = $(this).find('.histo-point').width();
			var myHistoId = $(this).attr('id');
			if($(this).is('.randomclass-1')){
				widthPoint = 61
			}
			if($(this).is('.randomclass-2')){
				widthPoint = 120
			}
			if($(this).is('.randomclass-3')){
				widthPoint = 102
			}		
			var old = 800;
			if(myHistoId == 'on-left'){
				$(this).find('.bloc-historique').animate({marginLeft:0, opacity:1}, old, 'easeOutQuint');	
				$(this).find('.histo-point img').animate({width:24, opacity:1, right:0}, 200, function(){
					$(this).parent().find('.tirets').animate({width:widthPoint}, 600);	
				});		
			}	
			else{
				$(this).find('.bloc-historique').animate({marginRight:0, opacity:1}, old, 'easeOutQuint');	
				$(this).find('.histo-point img').animate({width:24, opacity:1, left:0}, 200, function(){
					$(this).parent().find('.tirets').animate({width:widthPoint}, 600);	
				});		
			}

		});
	}, {  offset: 'bottom-in-view', triggerOnce: true });
});

function positionMenu(){
	Myoffset = $(document).scrollTop(); 
	var offset = $('#header h1').offset();   
	var offsetNav = $('#nav-historique').offset();
	var changePosit = 150;    
    if(Myoffset >= offsetNav.top + 131){                   
		$('#nav-historique').addClass('nav-fixed');
	}            
	else{
		$('#nav-historique').removeClass('nav-fixed');
	}	
}


