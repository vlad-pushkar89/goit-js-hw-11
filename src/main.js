import { fetchImages } from './js/pixabay-api';
import { renderImageCards, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let query = '';
let page = 1;
let galleryEl;
let simpleLightbox;

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('#search-form');
  galleryEl = document.querySelector('.gallery');

  if (!searchForm) {
    console.error('Element with id "search-form" not found!');
    return;
  }

  if (!galleryEl) {
    console.error('Element with class "gallery" not found!');
    return;
  }

  searchForm.addEventListener('submit', onSearch);
});

async function onSearch(event) {
  event.preventDefault();
  query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Search query cannot be empty',
    });
    return;
  }

  clearGallery(galleryEl);
  page = 1;
  fetchAndRenderImages();
}

async function fetchAndRenderImages() {
  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, no images found!',
      });
      return;
    }

    const markup = renderImageCards(data.hits);
    galleryEl.insertAdjacentHTML('beforeend', markup);

    if (simpleLightbox) {
      simpleLightbox.refresh();
    } else {
      simpleLightbox = new SimpleLightbox('.gallery a');
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
}
