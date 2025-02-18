const SCROLL_UP_SHOW_CLASS = 'scroll-up--show';
const SCROLL_HEIGHT = 300;

const scrollUp = document.querySelector('#scroll-up').content.querySelector('.scroll-up');

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(scrollUp);

  const scrollUpBtn = document.querySelector('.scroll-up__btn');

  const handleScrollUp = () => {
    if (window.pageYOffset > SCROLL_HEIGHT) {
      scrollUp.classList.add(SCROLL_UP_SHOW_CLASS);
    } else {
      scrollUp.classList.remove(SCROLL_UP_SHOW_CLASS);
    }
  }

  window.addEventListener('DOMContentLoaded', handleScrollUp);
  window.addEventListener('scroll', handleScrollUp);

  scrollUpBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
})

export {scrollUp};
