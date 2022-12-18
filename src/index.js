import { fetchImages } from './js/fetch';
const input = document.querySelector('[name="searchQuery"]');
const searchBtn = document.querySelector('button');

const DEBOUNCE_DELAY = 300;

let page = 1;
const per_page = 40;

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  const inputedValue = input.value.trim();
  return fetchImages(inputedValue);
});
