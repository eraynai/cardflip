const slides = document.querySelectorAll('section div.slides');
console.log(slides);

slides.forEach((slide) => {
	let current = 0;
	let z = 100000000;
	const images = slide.querySelectorAll('img');
	console.log(images);

	images.forEach((image) => {
		z = z - 1;
		image.style.zIndex = z;
	});

	slide.addEventListener('click', function () {
		z--;

		console.log(
			'this is the current z-index',
			(images[current].style.zIndex = z)
		);
		console.log('this is the current', current++);
		console.log((current = current % images.length));
	});
});
