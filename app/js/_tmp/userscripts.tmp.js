"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var catalogSlider = document.querySelector('.catalog-slider');

  if (catalogSlider) {
    var catalogSwiper = new Swiper(catalogSlider, {
      // Optional parameters
      slidesPerView: 3,
      spaceBetween: 80,
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
});