import { handleSwiperMode } from "./swiper-mode.js";

const productsCardsClass = '.products__cards';

const initProductsSwiper = () => {
  const productsSwiper = new Swiper(productsCardsClass, {
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

handleSwiperMode(initProductsSwiper);
