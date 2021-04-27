document.addEventListener('DOMContentLoaded', () => {

	const catalogSlider = document.querySelector('.catalog-slider');
	if (catalogSlider) {
		let catalogSwiper = new Swiper(catalogSlider, {
			// Optional parameters
			slidesPerView: 3,
			spaceBetween: 80,
			loop: true,
		
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

		})
	}

})
