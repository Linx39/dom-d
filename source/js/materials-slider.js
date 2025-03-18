import { handleSwiperMode } from "./swiper-mode.js";

const CALCULATION_MATERIALS_GROUP_CLASS = 'calculation__materials-group';

const initMaterialsSwiper = () => {
  const materialsSwiper = new Swiper(`.${CALCULATION_MATERIALS_GROUP_CLASS}`, {
    slidesPerView: 2,
    spaceBetween: 14,

    scrollbar: {
      el: '.calculation__materials-scrollbar',
      draggable: true,
    },
  });

  return materialsSwiper;
};

if (document.querySelector(`.${CALCULATION_MATERIALS_GROUP_CLASS}`)) {
  handleSwiperMode(initMaterialsSwiper);
}
