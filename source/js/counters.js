const DURATION = 1000;

const countersWrapper = document.querySelector('.js-counters-wrapper');

if (countersWrapper) {
  const counters = document.querySelectorAll('.js-counter');

  const isInViewport = (element) => {
    const distance = element.getBoundingClientRect();

    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const activateCounters = () => {
    if(isInViewport(countersWrapper)) {
      window.removeEventListener('scroll', activateCounters);

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
  };

  window.addEventListener('DOMContentLoaded', activateCounters);
  window.addEventListener('scroll', activateCounters);
}
