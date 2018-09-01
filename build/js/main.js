
// Slider Top

(function () {
	var prev  = document.querySelector('.slider .prev-botton'),
			next  = document.querySelector('.slider .next-botton'),
			slide = document.querySelectorAll('.slider-wrapper .slide'),
			i = 0;

	prev.onclick = function () {
		console.log(slide[i]);
		slide[i].classList.remove('shown');
		i = i - 1;
		if (i < 0) {
			i = slide.length - 1;
		};
		slide[i].classList.add('shown')
	}

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