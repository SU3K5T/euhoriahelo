var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,


	// Navigation arrows
	navigation: {
		nextEl: '.slider-button_next',
		prevEl: '.slider-button_prev',
	},

	keyboard: {
		enabled: true,
	},

	speed: 500,


})