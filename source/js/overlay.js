const BLUR_ACTIVE_CLASS = 'overlay--active';

const overlay = document.querySelector('.overlay');

export const activateOverlay = () => {
  if (!overlay.classList.contains(BLUR_ACTIVE_CLASS)) {
    overlay.classList.add(BLUR_ACTIVE_CLASS);
  }
}

export const deactivateOverlay = () => {
  if (overlay.classList.contains(BLUR_ACTIVE_CLASS)) {
    overlay.classList.remove(BLUR_ACTIVE_CLASS);
  }
}
