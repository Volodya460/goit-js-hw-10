// const url = 'https://restcountries.com/v3.1/';
// const urlOption = 'fields=name,capital,population,flags,languages';

// export function fetchCountries(nameCountry) {
//   return fetch(`${url}name/${nameCountry}?${urlOption}`).then(response => {
//     if (!response.ok) {
//       throw new Error('Oops, there is no country with that name');
//     }
//     return response.json();
//   });
// }

// export async function fetchCountries(nameCountry) {
//   const response = await fetch(`${url}name/${nameCountry}?${urlOption}`);
//   if (!response.ok) {
//     throw new Error('Oops, there is no country with that name');
//   }
//   return response.json();
// }

export class FetchApi {
  constructor() {
    this.nameCountry = '';
  }

  async fetchCountries(nameCountry) {
    const url = 'https://restcountries.com/v3.1/';
    const urlOption = 'fields=name,capital,population,flags,languages';

    const response = await fetch(`${url}name/${this.nameCountry}?${urlOption}`);
    if (!response.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return response.json();
  }
}
