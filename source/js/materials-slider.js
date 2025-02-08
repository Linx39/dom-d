import { Width } from "./const.js";

const initMaterialsSwiper = () => {
  const materialsSwiper = new Swiper('.calculation__materials-group', {
    slidesPerView: 2,
    spaceBetween: 14,
    // centeredSlides: true,

    scrollbar: {
      el: '.calculation__materials-scrollbar',
      draggable: true,
    },
  });

  return materialsSwiper;
};

let isMaterialsSwiperInit = false;
let materialsSwiper = Swiper;

const setMaterialsSwiperMode = () => {
  const isTabletWidth = window.matchMedia(`(min-width: ${Width.MD}px)`).matches;

  if (!isTabletWidth && !isMaterialsSwiperInit){
    materialsSwiper = initMaterialsSwiper();
    isMaterialsSwiperInit = true;
  }

  if (isTabletWidth && isMaterialsSwiperInit) {
    materialsSwiper.destroy();
    isMaterialsSwiperInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setMaterialsSwiperMode();
});

window.addEventListener("resize", () => {
  setMaterialsSwiperMode();
});
