import { handleSwiperMode } from "./swiper-mode.js";

const GALLERY_CARDS_CLASS = 'gallery__cards';

const initGallerySwiper = () => {
  const gallerySwiper = new Swiper(`.${GALLERY_CARDS_CLASS}`, {
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

if (document.querySelector(`.${GALLERY_CARDS_CLASS}`)) {
  handleSwiperMode(initGallerySwiper);
}
