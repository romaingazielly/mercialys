$(function() {
	initSlider();
	initSlider2();
});

function initSlider() {
	var allowClick = true;

	var currentSlideNumber = 1;
	var prevSlideNumber = parseInt(currentSlideNumber) - 1;
	var nextSlideNumber = parseInt(currentSlideNumber) + 1;

	var slideCurrentId = 'sa-slide'+currentSlideNumber;
	var slidePrevId = 'sa-slide'+prevSlideNumber;
	var slideNextId = 'sa-slide'+nextSlideNumber;

	var totalSlide = $('.slider1 #sa-nav-slide a').length;

	// Mini nav
	$('.slider1 #sa-nav-slide a').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay);

		slideCurrentId = 'sa-slide'+currentSlideNumber;

		if(allowClick) {
			allowClick = false;
			$this = $(this);
			var slideRequestId = 'sa-'+$this.attr('id').substr(4);

			if(slideRequestId != slideCurrentId) {
				prevSlideNumber = currentSlideNumber;
				currentSlideNumber = parseInt(slideRequestId.substr(8));
				if(prevSlideNumber < currentSlideNumber) {
					$('.slider1 #'+slideCurrentId).animate({ 'left':-600 });
					$('.slider1 #'+slideRequestId).css({ 'left':600 }).animate({ 'left':0 }, function(){
						allowClick = true;
					});
				}
				else {
					$('.slider1 #'+slideCurrentId).animate({ 'left':600 });
					$('.slider1 #'+slideRequestId).css({ 'left':-600 }).animate({ 'left':0 }, function(){
						allowClick = true;
					});
				}
				$('.slider1 #sa-nav-slide a').removeClass('current');
				$this.addClass('current');
			}
			else{
				allowClick = true;
			}
		}
	});

	// Click sur flèche de droite
	$('.slider1 #sa-right').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay);

		nextSlideNumber = parseInt(currentSlideNumber) + 1;
		slideNextId = 'sa-slide'+nextSlideNumber;
		slideCurrentId = 'sa-slide'+currentSlideNumber;

		if(currentSlideNumber < totalSlide) { 
			if(allowClick) {
				allowClick = false;

				$('.slider1 #'+slideCurrentId).animate({ 'left':-600 });
				$('.slider1 #'+slideNextId).css({ 'left':600 }).animate({ 'left':0 }, function(){
					currentSlideNumber++;
					allowClick = true;
				});
				$('.slider1 #sa-nav-slide a').removeClass('current');
				$('.slider1 #nav-slide'+nextSlideNumber).addClass('current');
			}
		}
	});

	// Click sur flèche de gauche
	$('.slider1 #sa-left').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay);

		prevSlideNumber = parseInt(currentSlideNumber) - 1;
		slidePrevId = 'sa-slide'+prevSlideNumber;
		slideCurrentId = 'sa-slide'+currentSlideNumber;

		if(prevSlideNumber > 0) { 
			if(allowClick) {
				allowClick = false;

				$('.slider1 #'+slideCurrentId).animate({ 'left':600 });
				$('.slider1 #'+slidePrevId).css({ 'left':-600 }).animate({ 'left':0 }, function(){
					currentSlideNumber--;
					allowClick = true;
				});
				$('.slider1 #sa-nav-slide a').removeClass('current');
				$('.slider1 #nav-slide'+prevSlideNumber).addClass('current');
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
			$('.slider1 #'+slideCurrentId).animate({ 'left':-600 });
			$('.slider1 #'+slideNextId).css({ 'left':600 }).animate({ 'left':0 }, function(){
				currentSlideNumber++;
			});
			$('.slider1 #sa-nav-slide a').removeClass('current');
			$('.slider1 #nav-slide'+nextSlideNumber).addClass('current');
			if(currentSlideNumber == 3) yoyo = false;
		}
		else {
			$('.slider1 #'+slideCurrentId).animate({ 'left':600 });
			$('.slider1 #'+slidePrevId).css({ 'left':-600 }).animate({ 'left':0 }, function(){
				currentSlideNumber--;
			});
			$('.slider1 #sa-nav-slide a').removeClass('current');
			$('.slider1 #nav-slide'+prevSlideNumber).addClass('current');
			if(prevSlideNumber == 1) yoyo = true;
		}
	},timerSlide);
}

function initSlider2() {
	var allowClick2 = true;

	var currentSlideNumber2 = 11;
	var prevSlideNumber2 = parseInt(currentSlideNumber2) - 1;
	var nextSlideNumber2 = parseInt(currentSlideNumber2) + 1;

	var slideCurrentId2 = 'sa-slide'+currentSlideNumber2;
	var slidePrevId2 = 'sa-slide'+prevSlideNumber2;
	var slideNextId2 = 'sa-slide'+nextSlideNumber2;

	var totalSlide2 = $('.slider2 #sa-nav-slide a').length+10;

	// Mini nav
	$('.slider2 #sa-nav-slide a').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay2);

		slideCurrentId2 = 'sa-slide'+currentSlideNumber2;

		if(allowClick2) {
			allowClick2 = false;
			$this2 = $(this);
			var slideRequestId2 = 'sa-'+$this2.attr('id').substr(4);

			if(slideRequestId2 != slideCurrentId2) {
				prevSlideNumber2 = currentSlideNumber2;
				currentSlideNumber2 = parseInt(slideRequestId2.substr(8));
				if(prevSlideNumber2 < currentSlideNumber2) {
					$('.slider2 #'+slideCurrentId2).animate({ 'left':-600 });
					$('.slider2 #'+slideRequestId2).css({ 'left':600 }).animate({ 'left':0 }, function(){
						allowClick2 = true;
					});
				}
				else {
					$('.slider2 #'+slideCurrentId2).animate({ 'left':600 });
					$('.slider2 #'+slideRequestId2).css({ 'left':-600 }).animate({ 'left':0 }, function(){
						allowClick2 = true;
					});
				}
				$('.slider2 #sa-nav-slide a').removeClass('current');
				$this2.addClass('current');
			}
			else{
				allowClick2 = true;
			}
		}
	});

	// Click sur flèche de droite
	$('.slider2 #sa-right').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay2);

		nextSlideNumber2 = parseInt(currentSlideNumber2) + 1;
		slideNextId2 = 'sa-slide'+nextSlideNumber2;
		slideCurrentId2 = 'sa-slide'+currentSlideNumber2;

		if(currentSlideNumber2 < totalSlide2) { 
			if(allowClick2) {
				allowClick2 = false;

				$('.slider2 #'+slideCurrentId2).animate({ 'left':-600 });
				$('.slider2 #'+slideNextId2).css({ 'left':600 }).animate({ 'left':0 }, function(){
					currentSlideNumber2++;
					allowClick2 = true;
				});
				$('.slider2 #sa-nav-slide a').removeClass('current');
				$('.slider2 #nav-slide'+nextSlideNumber2).addClass('current');
			}
		}
	});

	// Click sur flèche de gauche
	$('.slider2 #sa-left').on('click', function(e){
		e.preventDefault();

		window.clearInterval(autoPlay2);

		prevSlideNumber2 = parseInt(currentSlideNumber2) - 1;
		slidePrevId2 = 'sa-slide'+prevSlideNumber2;
		slideCurrentId2 = 'sa-slide'+currentSlideNumber2;

		if(prevSlideNumber2 > 10) { 
			if(allowClick2) {
				allowClick2 = false;

				$('.slider2 #'+slideCurrentId2).animate({ 'left':600 });
				$('.slider2 #'+slidePrevId2).css({ 'left':-600 }).animate({ 'left':0 }, function(){
					currentSlideNumber2--;
					allowClick2 = true;
				});
				$('.slider2 #sa-nav-slide a').removeClass('current');
				$('.slider2 #nav-slide'+prevSlideNumber2).addClass('current');
			}
		}
	});

	// Autoplay
	var timerSlide2 = 6000;
	var yoyo2 = true;
	var autoPlay2 = window.setInterval(function autoPlay2() {

		prevSlideNumber2 = parseInt(currentSlideNumber2) - 1;
		slidePrevId2 = 'sa-slide'+prevSlideNumber2;
		nextSlideNumber2 = parseInt(currentSlideNumber2) + 1;
		slideNextId2 = 'sa-slide'+nextSlideNumber2;
		slideCurrentId2 = 'sa-slide'+currentSlideNumber2;

		if(currentSlideNumber2 < totalSlide2 && yoyo2) {
			$('.slider2 #'+slideCurrentId2).animate({ 'left':-600 });
			$('.slider2 #'+slideNextId2).css({ 'left':600 }).animate({ 'left':0 }, function(){
				currentSlideNumber2++;
			});
			$('.slider2 #sa-nav-slide a').removeClass('current');
			$('.slider2 #nav-slide'+nextSlideNumber2).addClass('current');
			if(currentSlideNumber2 == 13) yoyo2 = false;
		}
		else {
			$('.slider2 #'+slideCurrentId2).animate({ 'left':600 });
			$('.slider2 #'+slidePrevId2).css({ 'left':-600 }).animate({ 'left':0 }, function(){
				currentSlideNumber2--;
			});
			$('.slider2 #sa-nav-slide a').removeClass('current');
			$('.slider2 #nav-slide'+prevSlideNumber2).addClass('current');
			if(prevSlideNumber2 == 11) yoyo2 = true;
		}
	},timerSlide2);
}