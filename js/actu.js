$(function(){ 
	initSlider();
	showFilter();
});

function initSlider() {
	var allowClick = true;

	var currentSlideNumber = 1;
	var prevSlideNumber = parseInt(currentSlideNumber) - 1;
	var nextSlideNumber = parseInt(currentSlideNumber) + 1;

	var slideCurrentId = 'sa-slide'+currentSlideNumber;
	var slidePrevId = 'sa-slide'+prevSlideNumber;
	var slideNextId = 'sa-slide'+nextSlideNumber;

	var totalSlide = $('#sa-nav-slide a').length;

	// Mini nav
	$('#sa-nav-slide a').on('click', function(e){
		e.preventDefault();

		slideCurrentId = 'sa-slide'+currentSlideNumber;

		if(allowClick) {
			allowClick = false;
			$this = $(this);
			var slideRequestId = 'sa-'+$this.attr('id').substr(4);

			if(slideRequestId != slideCurrentId) {
				prevSlideNumber = currentSlideNumber;
				currentSlideNumber = parseInt(slideRequestId.substr(8));
				if(prevSlideNumber < currentSlideNumber) {
					$('#'+slideCurrentId).animate({ 'left':-600 });
					$('#'+slideRequestId).css({ 'left':600 }).animate({ 'left':0 }, function(){
						allowClick = true;
					});
				}
				else {
					$('#'+slideCurrentId).animate({ 'left':600 });
					$('#'+slideRequestId).css({ 'left':-600 }).animate({ 'left':0 }, function(){
						allowClick = true;
					});
				}
				$('#sa-nav-slide a').removeClass('current');
				$this.addClass('current');
			}
			else{
				allowClick = true;
			}
		}
	});

	// Click sur flèche de droite
	$('#sa-right').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay);

		nextSlideNumber = parseInt(currentSlideNumber) + 1;
		slideNextId = 'sa-slide'+nextSlideNumber;
		slideCurrentId = 'sa-slide'+currentSlideNumber;

		if(currentSlideNumber < totalSlide) { 
			if(allowClick) {
				allowClick = false;

				$('#'+slideCurrentId).animate({ 'left':-600 });
				$('#'+slideNextId).css({ 'left':600 }).animate({ 'left':0 }, function(){
					currentSlideNumber++;
					allowClick = true;
				});
				$('#sa-nav-slide a').removeClass('current');
				$('#nav-slide'+nextSlideNumber).addClass('current');
			}
		}
	});

	// Click sur flèche de gauche
	$('#sa-left').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay);

		prevSlideNumber = parseInt(currentSlideNumber) - 1;
		slidePrevId = 'sa-slide'+prevSlideNumber;
		slideCurrentId = 'sa-slide'+currentSlideNumber;

		if(prevSlideNumber > 0) { 
			if(allowClick) {
				allowClick = false;

				$('#'+slideCurrentId).animate({ 'left':600 });
				$('#'+slidePrevId).css({ 'left':-600 }).animate({ 'left':0 }, function(){
					currentSlideNumber--;
					allowClick = true;
				});
				$('#sa-nav-slide a').removeClass('current');
				$('#nav-slide'+prevSlideNumber).addClass('current');
			}
		}
	});

	// Autoplay
	var timerSlide = 6000;
	var yoyo = true;
	var autoPlay = window.setInterval(function autoPlay() {

		prevSlideNumber = parseInt(currentSlideNumber) - 1;
		slidePrevId = 'sa-slide'+prevSlideNumber;
		nextSlideNumber = parseInt(currentSlideNumber) + 1;
		slideNextId = 'sa-slide'+nextSlideNumber;
		slideCurrentId = 'sa-slide'+currentSlideNumber;

		if(currentSlideNumber < totalSlide && yoyo) {
			$('#'+slideCurrentId).animate({ 'left':-600 });
			$('#'+slideNextId).css({ 'left':600 }).animate({ 'left':0 }, function(){
				currentSlideNumber++;
			});
			$('#sa-nav-slide a').removeClass('current');
			$('#nav-slide'+nextSlideNumber).addClass('current');
			if(currentSlideNumber == 3) yoyo = false;
		}
		else {
			$('#'+slideCurrentId).animate({ 'left':600 });
			$('#'+slidePrevId).css({ 'left':-600 }).animate({ 'left':0 }, function(){
				currentSlideNumber--;
			});
			$('#sa-nav-slide a').removeClass('current');
			$('#nav-slide'+prevSlideNumber).addClass('current');
			if(prevSlideNumber == 1) yoyo = true;
		}
	},timerSlide);
}

function showFilter() {
	var open = false;
	$('#actu-filtre-button').click(function(e){
		e.preventDefault();

		if(!open) {
			$(this).css({'background-position-x': -13});
			$('#actu-filter').animate({ 'height':290 }, 500, 'easeOutQuint', function(){
				open = true;
			});
		}
		else {
			$(this).css({'background-position-x': 80});
			$('#actu-filter').animate({ 'height':0 }, 500, 'easeOutQuint', function(){
				open = false;
			});
		}
	});
}
