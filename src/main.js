import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconPath from './img/icon.svg';
import { fetchImages } from './js/pixabay-api.js';

export const refs = {
  searchBtn: document.querySelector('.js-search-btn'),
  searchInput: document.querySelector('.js-search-field'),
  form: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.load-btn'),
  loader: document.querySelector('.loader'),
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

async function onSubmit(e) {
  e.preventDefault();
  showLoader();
  const inputValue = refs.searchInput.value.trim();
  if (!inputValue) {
    return;
  }
  fetchParameters.q = inputValue;
  fetchParameters.page = 1;
  refs.gallery.innerHTML = '';
  refs.form.reset();
  await fetchImages(fetchParameters);
}

async function loadMore() {
  showLoader();
  fetchParameters.page += 1;
  await fetchImages(fetchParameters);
  checkEndOfCollection();
  hideLoader();
}

export function hideOnlyLoader() {
  refs.loader.classList.add('visually-hidden');
}

function showLoader() {
  refs.loader.classList.remove('visually-hidden');
  refs.loadBtn.classList.add('visually-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('visually-hidden');
  refs.loadBtn.classList.remove('visually-hidden');
}

function checkEndOfCollection() {
  const maxPage = Math.ceil(fetchParameters.total / fetchParameters.per_page);
  if (fetchParameters.page >= maxPage) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
    });
    refs.loadBtn.classList.add('visually-hidden');
  }
}
