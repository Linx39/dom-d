import { Width } from "./const.js";

const initBrandsSwiper = () => {
  const brandsSwiper = new Swiper('.brands__cards', {
    slidesPerView: 'auto',
    spaceBetween: 25,

    navigation: {
      prevEl: '.brands__navigation-btn--prev',
      nextEl: '.brands__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
    },

    breakpoints: {
      [Width.SM]: {
        spaceBetween: 25,
      },
      [Width.MD]: {
        spaceBetween: 25,
      },
      [Width.LG]: {
        spaceBetween: 40,
      },
      [Width.XL]: {
        spaceBetween: 60,
      },
      [Width.XXL]: {
        spaceBetween: 60,
      },
    },
  });

  return brandsSwiper;
};

initBrandsSwiper();

// let isBrandsSwiperInit = false;
// let brandsSwiper = Swiper;

// const setBrandsSwiperMode = () => {
//   const isTabletWidth = window.matchMedia(`(min-width: ${Width.MD}px)`).matches;

//   if (!isTabletWidth && !isBrandsSwiperInit){
//     brandsSwiper = initBrandsSwiper();
//     isBrandsSwiperInit = true;
//   }

//   if (isTabletWidth && isBrandsSwiperInit) {
//     brandsSwiper.destroy();
//     isBrandsSwiperInit = false;
//   }
// };

// window.addEventListener("DOMContentLoaded", () => {
//   setBrandsSwiperMode();
// });

// window.addEventListener("resize", () => {
//   setBrandsSwiperMode();
// });
