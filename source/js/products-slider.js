import { handleSwiperMode } from "./swiper-mode.js";

const PRODUCTS_CARDS_CLASS = 'products__cards';

const initProductsSwiper = () => {
  const productsSwiper = new Swiper(`.${PRODUCTS_CARDS_CLASS}`, {
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

if (document.querySelector(`.${PRODUCTS_CARDS_CLASS}`)) {
  handleSwiperMode(initProductsSwiper);
}
