
// Slider Top

(function () {
	let prev = document.querySelector('.slider .prev-botton'),
			next = document.querySelector('.slider .next-botton'),
			slide = document.querySelectorAll('.slider-wrapper .slide');
	//let autoPlay = setInterval(nextSlide, 2000);

	// slide.onmouseover = function(e) {
	// 	console.log(1)
	// //	stopSlide(autoPlay)
	// };

	// // (function() {
	// // 		let a = setInterval(nextSlide,1000);
	// // 	// код выполняется автоматически
	// //  })();

	// // function stopSlide() {
	// // 	clearInterval(autoPlay)
	// // };
	

	// Dots nav

	for (j = 0; j < slide.length; j++){
		let dot = document.createElement('li'),
			dots = document.querySelector('.slider .nav-dots');
		dots.appendChild(dot)
	}

	let dot = document.querySelectorAll('.nav-dots')
	

	$('.nav-dots li').click(function () {
		let numberDot = $('.nav-dots li').index(this),
			slide = $('.slider-wrapper .slide'),
			dot = $('.nav-dots li');
		
		dot.removeClass();
		dot.eq(numberDot).addClass('sl-avtive');
		slide.removeClass('shown');
		slide.eq(numberDot).addClass('shown');
	})

	function toggleActive() {

	}

	// Btn Prev Next

	function findEl() {
		let el = $('.slider-wrapper .shown'),
				index = $('.slider-wrapper .slide').index(el);
		return index;
		
	}
	prev.onclick = function () {
		let index = findEl();
		slide[index].classList.remove('shown');
		index = index - 1;
		if (index < 0) {
			index = slide.length - 1;
		};
		slide[index].classList.add('shown')
	}

	next.onclick = function () {	
		let index = findEl();
		slide[index].classList.remove('shown');
		index = index + 1;
		if (index >= slide.length) {
			index = 0;
		}
		slide[index].classList.add('shown');
	}	

	function nextSlide() {
		let index = findEl();
		slide[index].classList.remove('shown');
		index = index + 1;
		if (index >= slide.length) {
			index = 0;
		}
		slide[index].classList.add('shown');
	}
})()