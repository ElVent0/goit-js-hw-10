export function fetchCountries(countryName) {
  const filter = '?fields=name,capital,population,flags,languages';
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}${filter}`
  ).then(response => {
    return response.json();
  });
}
