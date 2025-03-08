import { Width } from "./const.js";

export const handleSwiperMode = (initSwiper) => {
  let isSwiperInit = false;
  let swiper = Swiper;

  const setSwiperMode = () => {
    const isTabletWidth = window.matchMedia(`(min-width: ${Width.MD}px)`).matches;

    if (!isTabletWidth && !isSwiperInit){
      swiper = initSwiper();
      isSwiperInit = true;
    }

    if (isTabletWidth && isSwiperInit) {
      swiper.destroy();
      isSwiperInit = false;
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    setSwiperMode();
  });

  window.addEventListener("resize", () => {
    setSwiperMode();
  })
}
