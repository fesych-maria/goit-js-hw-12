import iconPath from './img/icon.svg';
import { fetchImages } from './js/pixabay-api.js';

export const refs = {
  searchBtn: document.querySelector('.js-search-btn'),
  searchInput: document.querySelector('.js-search-field'),
  form: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.load-btn'),
};

export const errorObj = {
  position: 'topRight',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  messageColor: '#fafafb',
  messageSize: '16px',
  backgroundColor: '#ef4040',
  maxWidth: '432px',
  iconUrl: iconPath,
};

refs.form.addEventListener('submit', onSubmit);
refs.loadBtn.addEventListener('click', loadMore);

const fetchParameters = {
  key: '48862080-31d0d2e2035ba3e1d36ba0d4d',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 40,
};

function onSubmit(e) {
  e.preventDefault();
  const inputValue = refs.searchInput.value.trim();
  if (!inputValue) {
    return;
  }
  fetchParameters.q = inputValue;
  fetchParameters.page = 1;
  refs.gallery.innerHTML = '<span class="loader"></span>';
  refs.form.reset();
  fetchImages(fetchParameters);
}

async function loadMore() {
  fetchParameters.page += 1;
  await fetchImages(fetchParameters);
}
