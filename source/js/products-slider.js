import { hadleSwiperMode } from "./swiper-mode.js";

const initProductsSwiper = () => {
  const productsSwiper = new Swiper('.products__cards', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    watchSlidesProgress: true,
    slideFullyVisibleClass: 'card--visible',

    navigation: {
      prevEl: '.products__navigation-btn--prev',
      nextEl: '.products__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
    },
  });

  return productsSwiper;
};

hadleSwiperMode(initProductsSwiper);
