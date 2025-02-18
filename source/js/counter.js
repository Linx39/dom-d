const DURATION = 1000;

const countersWrapper = document.querySelector('.js-counters-wrapper');

const isInViewport = (elem) => {
  const distance = elem.getBoundingClientRect();

  return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const counters = document.querySelectorAll('.js-counter');

const onScroll = () => {
  if(isInViewport(countersWrapper)) {
    window.removeEventListener('scroll', onScroll);

    counters.forEach(counter => {
      let start = +counter.innerHTML;
      const end = +counter.dataset.max;

      const interval = setInterval(() => {
        counter.innerHTML = ++start;
        if(start === end) {
          clearInterval(interval);
        }
      }, DURATION / end );
    })
  }
}

window.addEventListener('scroll', onScroll);
