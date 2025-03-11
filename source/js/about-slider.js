import { handleSwiperMode } from "./swiper-mode.js";

const ABOUT_CARDS_CLASS = 'about__cards';

const initAboutSwiper = () => {
  const aboutSwiper = new Swiper(`.${ABOUT_CARDS_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      prevEl: '.about__navigation-btn--prev',
      nextEl: '.about__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
    },
  });

  return aboutSwiper;
};

if (document.querySelector(`.${ABOUT_CARDS_CLASS}`)) {
  handleSwiperMode(initAboutSwiper);
}
