import { Width } from "./const.js";

const initGallerySwiper = () => {
  const gallerySwiper = new Swiper('.gallery__cards', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,

    navigation: {
      prevEl: '.gallery__navigation-btn--prev',
      nextEl: '.gallery__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
    },
  });

  return gallerySwiper;
};

let isGallerySwiperInit = false;
let gallerySwiper = Swiper;

const setGallerySwiperMode = () => {
  const isTabletWidth = window.matchMedia(`(min-width: ${Width.MD}px)`).matches;

  if (!isTabletWidth && !isGallerySwiperInit){
    gallerySwiper = initGallerySwiper();
    isGallerySwiperInit = true;
  }

  if (isTabletWidth && isGallerySwiperInit) {
    gallerySwiper.destroy();
    isGallerySwiperInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setGallerySwiperMode();
});

window.addEventListener("resize", () => {
  setGallerySwiperMode();
});
