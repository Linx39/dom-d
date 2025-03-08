import { handleSwiperMode } from "./swiper-mode.js";

const initMaterialsSwiper = () => {
  const materialsSwiper = new Swiper('.calculation__materials-group', {
    slidesPerView: 2,
    spaceBetween: 12,

    scrollbar: {
      el: '.calculation__materials-scrollbar',
      draggable: true,
    },
  });

  return materialsSwiper;
};

handleSwiperMode(initMaterialsSwiper);
