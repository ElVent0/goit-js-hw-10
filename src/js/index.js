import '../css/styles.css';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', onInput);

function onInput(event) {
  const countryName = event.currentTarget.value;

  fetchCountries(countryName).then(response => {
    response
      .map(country => {
        `
      <li>${country.name}</li>
      `;
      })
      .join('');
  });
}
