import { hadleSwiperMode } from "./swiper-mode.js";

const initGallerySwiper = () => {
  const gallerySwiper = new Swiper('.gallery__cards', {
    slidesPerView: 'auto',
    spaceBetween: 2,
    centeredSlides: true,
    watchSlidesProgress: true,
    slideFullyVisibleClass: 'gallery__item--visible',

    navigation: {
      prevEl: '.gallery__navigation-btn--prev',
      nextEl: '.gallery__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
    },
  });

  return gallerySwiper;
};

hadleSwiperMode(initGallerySwiper);
