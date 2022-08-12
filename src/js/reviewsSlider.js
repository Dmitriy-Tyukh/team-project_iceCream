// or only core styles
import '@splidejs/splide/src/css/core/index.scss';

import Splide from '@splidejs/splide';

const splideOptions = {
  type: 'loop',
  label: 'Testomonials',

  speed: 1000,
  rewindByDrag: true,
  arrows: false,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  autoplay: true,
  interval: 4000,
  classes: {
    pagination: 'splide__pagination pagination',
    page: 'splide__pagination__page pagination__page',
  },
};

new Splide('.splide', splideOptions).mount();
