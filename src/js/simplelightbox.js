import SimpleLightbox from 'simplelightbox';

const galleryOptions = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

const gallery = new SimpleLightbox('.grid a', galleryOptions);
