import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

import { refs } from '../main.js';
import { imagesTemplate } from './render-functions.js';
import iconPath from '../img/icon.svg';

export function onSubmit(e) {
  e.preventDefault();
  const inputValue = refs.searchInput.value.trim();
  if (!inputValue) {
    return;
  }
  refs.gallery.innerHTML = '<span class="loader"></span>';
  refs.form.reset();
  axios
    .get('/api/', {
      params: {
        key: '48862080-31d0d2e2035ba3e1d36ba0d4d',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      const result = response.data.hits;
      if (result.length === 0) {
        throw new Error();
      }
      imagesTemplate(result);
    })
    .catch(e => {
      refs.gallery.innerHTML = '';
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fafafb',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        maxWidth: '432px',
        iconUrl: iconPath,
      });
    });
}
