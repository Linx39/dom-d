import { handleSwiperMode } from "./swiper-mode.js";

const initAboutSwiper = () => {
  const aboutSwiper = new Swiper('.about__cards', {
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

handleSwiperMode(initAboutSwiper);
