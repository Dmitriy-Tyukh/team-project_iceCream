import { debounce } from 'debounce';

const allTitles = document.querySelectorAll('[data-title]');
const viewPortH = document.documentElement.clientHeight;

document.addEventListener(
  'scroll',
  debounce(() => {
    allTitles.forEach(title => {
      const titleBottomCoord = title.getBoundingClientRect().bottom;

      if (titleBottomCoord <= viewPortH) {
        title?.classList.remove('is-hidden');
        title.classList.add('animate__animated', 'animate__bounceInLeft');
      }
    });
  }, 10)
);
