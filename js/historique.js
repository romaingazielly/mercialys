$(function(){
	$('.item-historique').each(function(){
		var radomClass = Math.floor(Math.random() * 3) + 1;
		$(this).addClass('randomclass-'+radomClass);
	});	
	$('.item-historique:eq(1)').addClass('second-child');	
	var container = document.querySelector('.historique');
	var msnry = new Masonry( container, {
	  columnWidth: 300,
	  itemSelector: '.item-historique'
	});		
});
$(window).load(function(){
	$('.item-historique').each(function(){
		var thisPosit = $(this).css('left');
		if(parseInt(thisPosit) > 10){$(this).attr('id','on-right');}
		else{$(this).attr('id','on-left');}
	});
});