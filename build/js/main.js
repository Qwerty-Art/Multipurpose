
// Slider Top

(function () {
	let prev  = document.querySelector('.slider .prev-botton'),
			next  = document.querySelector('.slider .next-botton'),
			slide = document.querySelectorAll('.slider-wrapper .slide'),
			i = 0;
	
	for (j = 0; j < slide.length; j++){
		let dot = document.createElement('li'),
			dots = document.querySelector('.slider .nav-dots');
		dots.appendChild(dot)
	}

	let dot = document.querySelectorAll('.nav-dots')
	console.log(dot);


	$('.nav-dots li').click(function () {
		let numberDot = $('.nav-dots li').index(this),
				slide = $('.slider-wrapper .slide');

		slide.removeClass('shown');
		slide.eq(numberDot).addClass('shown');

	})

	// Dots nav

	prev.onclick = function () {
		console.log(slide[i]);
		$().classList.remove('shown');
		i = i - 1;
		if (i < 0) {
			i = slide.length - 1;
		};
		slide[i].classList.add('shown')
	}

	// Btn Prev Next

	next.onclick = function () {
		console.log(slide[i]);
		slide[i].classList.remove('shown');
		i = i + 1;
		if (i >= slide.length) {
			i = 0;
		};
		slide[i].classList.add('shown')
	}
	
})()