$(function($){ 

	// Depliage du bloc
	$('.detail-left').on('click', function(e){
		e.preventDefault();

		$this = $(this);
		//$this.off('click');
		$this.parent().css({ 'cursor':'auto' });
		$('.detail-cache').animate({'width':200}, 'slow');
		$('.detail-cache hr').css({'background':'#000'}).animate({'width': '30px'});
		$this.parents('.detail-cache').animate({ 'left':0, 'top':0 }).animate({'width':600}, 'slow');

		var curId = $this.parents('.detail-cache').attr('id');
		$('#'+curId+' hr').css({'background':'#9bb106'}).animate({'width': '100%'});
		for(i=0; i<$('.detail-cache').length; i++) {
			div = $('#tm'+i).attr('id');

			if(div == 'tm0' && div != curId) {
				$('#'+div).animate({ 'left':0, 'top':303 });
			}
			else if(div == 'tm1' && div != curId) {
				if(curId == 'tm0')
					$('#'+div).animate({ 'left':0, 'top':303 });
				else if(curId == 'tm2')
					$('#'+div).animate({ 'left':195, 'top':303 });
				else if(curId == 'tm3')
					$('#'+div).animate({ 'left':390, 'top':303 });
				else
					$('#'+div).animate({ 'left':0, 'top':606 });
			}
			else if(div == 'tm2' && div != curId) {
				if(curId == 'tm3')
					$('#'+div).animate({ 'left':195, 'top':303 });
				else
					$('#'+div).animate({ 'left':195, 'top':303 });
			}
			else if(div == 'tm3' && div != curId) {
				$('#'+div).animate({ 'left':390, 'top':303 });
			}
			else if(div == 'tm4' && div != curId) {
				$('#'+div).animate({ 'left':0, 'top':606 });
			}
		}
	});

	// Repliage du bloc
	$('.close').on('click', function(e){
		e.preventDefault();

		$this = $(this);
		$this.parents('.detail-container').css({ 'cursor':'pointer' });
		$this.parents('.detail-cache').animate({'width':200}, function(){
			for(i=0; i<$('.detail-cache').length; i++) {
				div = $('#tm'+i).attr('id');

				if(i == 0) {
					$('#'+div).animate({ 'left':0, 'top':0 });
				}
				else if( i == 1 ) {
					$('#'+div).animate({ 'left':195, 'top':0 });
				}
				else if( i == 2 ) {
					$('#'+div).animate({ 'left':390, 'top':0 });
				}
				else if( i == 3 ) {
					$('#'+div).animate({ 'left':0, 'top':303 });
				}
				else if( i == 4 ) {
					$('#'+div).animate({ 'left':195, 'top':303 });
				}
				else if( i == 5 ) {
					$('#'+div).animate({ 'left':390, 'top':303 });
				}
			}
		});
		var curId = $this.parents('.detail-cache').attr('id');
		$('#'+curId+' hr').css({'background':'#000'}).animate({'width': '30px'});
		//$('#'+curId+' .detail-left').on();
	});

	// Positionnement des blocs à l'arrivée
	for(i=0; i<$('.detail-cache').length; i++) {
		div = $('#tm'+i).attr('id');

		if(i == 0) {
			$('#'+div).animate({ 'left':0, 'top':0 });
		}
		else if( i == 1 ) {
			$('#'+div).animate({ 'left':195, 'top':0 });
		}
		else if( i == 2 ) {
			$('#'+div).animate({ 'left':390, 'top':0 });
		}
		else if( i == 3 ) {
			$('#'+div).animate({ 'left':0, 'top':303 });
		}
		else if( i == 4 ) {
			$('#'+div).animate({ 'left':195, 'top':303 });
		}
		else if( i == 5 ) {
			$('#'+div).animate({ 'left':390, 'top':303 });
		}
	}
});