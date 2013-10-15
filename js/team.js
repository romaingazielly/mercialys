$(function($){ 

	var people = $('.people');
	people.masonry({
		isAnimated: true,
		itemSelector: '.team-member'
	});

	// Depliage du bloc
	$('.detail-left').on('click', function(e){
		e.preventDefault();

		$this = $(this);
		$this.parent().css({ 'cursor':'auto' });
		$this.parents('.detail-cache').animate({'width':600}, 'slow');
		$this.parent().find('div.detail-right').fadeIn('fast');
		
		// people.masonry('reload');
	});

	// Repliage du bloc
	$('.close').on('click', function(e){
		e.preventDefault();

		$this = $(this);
		$this.parents('.detail-container').css({ 'cursor':'pointer' });
		$this.parents('.detail-cache').animate({'width':200}, function() {
			$this.parents('.detail-right').fadeOut();
		});
	});
});