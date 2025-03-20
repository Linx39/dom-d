import { Width } from "./const.js";

const BRANDS_CARDS_CLASS = 'brands__cards';

const initBrandsSwiper = () => {
  const brandsSwiper = new Swiper(`.${BRANDS_CARDS_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 40,
    watchSlidesProgress: true,
    slideFullyVisibleClass: 'brands__item--visible',
    loop: true,
    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: true,
    },

    navigation: {
      prevEl: '.brands__navigation-btn--prev',
      nextEl: '.brands__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
    },

    breakpoints: {
      [Width.MD]: {
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

if (document.querySelector(`.${BRANDS_CARDS_CLASS}`)) {
  initBrandsSwiper();
}
