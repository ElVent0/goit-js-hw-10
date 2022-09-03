import '../css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const infoEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onInput, 300));

function onInput() {
  const countryName = inputEl.value.trim();
  if (countryName.length === 0) {
    return (infoEl.innerHTML = ''), (listEl.innerHTML = '');
  }

  fetchCountries(countryName)
    .then(response => {
      if (response.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return (infoEl.innerHTML = ''), (listEl.innerHTML = '');
      } else if (response.length === 1) {
        renderOneCountry(response);
      } else {
        renderCountries(response);
      }
    })
    .catch(onError);

  function renderOneCountry(response) {
    (infoEl.innerHTML = ''), (listEl.innerHTML = '');
    const markup = response
      .map(item => {
        return `
      <div class="body__header">
      <img src="${item.flags.svg}" class="body__image"></img>
      <h1 class="body__title">${item.name.official}</h1>
      </div>
      <ul class="body__list">
      <li class="body__item"><b>Capital:</b> ${item.capital}</li>
      <li class="body__item"><b>Population:</b> ${item.population}</li>
      <li class="body__item"><b>Languages:</b> ${Object.values(
        item.languages
      )}</li>
      </ul>
      `;
      })
      .join('');
    infoEl.innerHTML = markup;
  }

  function renderCountries(response) {
    (infoEl.innerHTML = ''), (listEl.innerHTML = '');
    const markup = response
      .map(item => {
        return `
      <li class="body__item--many">
        <img src="${item.flags.svg}" class="body__image"></img>
        <p class="body__paragraph">${item.name.official}</p>
      </li>
      `;
      })
      .join('');
    listEl.innerHTML = markup;
  }
}

function onError() {
  infoEl.innerHTML = '';
  listEl.innerHTML = '';
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
