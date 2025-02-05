import { Width } from "./const.js";

const initProductsSwiper = () => {
  const productsSwiper = new Swiper('.products__cards', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      prevEl: '.products__navigation-btn--prev',
      nextEl: '.products__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
    },
  });

  return productsSwiper;
};

let isProductsSwiperInit = false;
let productsSwiper = Swiper;

const setProductsSwiperMode = () => {
  const isTabletWidth = window.matchMedia(`(min-width: ${Width.MD}px)`).matches;

  if (!isTabletWidth && !isProductsSwiperInit){
    productsSwiper = initProductsSwiper();
    isProductsSwiperInit = true;
  }

  if (isTabletWidth && isProductsSwiperInit) {
    productsSwiper.destroy();
    isProductsSwiperInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setProductsSwiperMode();
});

window.addEventListener("resize", () => {
  setProductsSwiperMode();
});
