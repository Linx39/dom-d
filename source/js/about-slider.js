import { Width } from "./const.js";

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

let isAboutSwiperInit = false;
let aboutSwiper = Swiper;

const setAboutSwiperMode = () => {
  const isTabletWidth = window.matchMedia(`(min-width: ${Width.MD}px)`).matches;

  if (!isTabletWidth && !isAboutSwiperInit){
    aboutSwiper = initAboutSwiper();
    isAboutSwiperInit = true;
  }

  if (isTabletWidth && isAboutSwiperInit) {
    aboutSwiper.destroy();
    isAboutSwiperInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setAboutSwiperMode();
});

window.addEventListener("resize", () => {
  setAboutSwiperMode();
});
