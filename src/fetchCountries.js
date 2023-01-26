const url = 'https://restcountries.com/v3.1/';
const urlOption = 'fields=name,capital,population,flags,languages';

export function fetchCountries(nameCountry) {
  return fetch(`${url}name/${nameCountry}?${urlOption}`).then(response => {
    if (!response.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return response.json();
  });
}
