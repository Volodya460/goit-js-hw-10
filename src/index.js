import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const delay = 300;
const inputEl = document.getElementById('search-box');
const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

inputEl.addEventListener('input', debounce(GetCountryName, delay));

function GetCountryName(event) {
  const nameCountry = event.target.value.trim();
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  console.log(nameCountry);
  if (!nameCountry) {
    return;
  }

  fetchCountries(nameCountry).then(optionsForNeedCountry).catch(errorMessage);
}

function createСountry(countries) {
  const count = countries
    .map(
      ({
        flags: { png },
        name: { official },
        capital,
        population,
        languages,
      }) => {
        const countryLanguages = Object.values(languages).join(',');
        return `
   <div class="country__box">
   <img class='country__flag' src="${png}" alt=" ${official} flag  " />
   <h1 class='country__name'>${official}</h1>
   </div>
   <p class='country__capital'>Capital: <span class='country__value'>${capital}</span></p> 
   <p class='country__population'>Population: <span class='country__value'>${population}</span></p>
   <p class='country__language'>Languages: <span class='country__value'>${countryLanguages}</span></p>
   `;
      }
    )
    .join('');
  countryInfo.innerHTML = count;
}

function createСountryList(countries) {
  const count = countries
    .map(({ flags: { png }, name: { official } }) => {
      return `
   <li><img class='countries__flag' src="${png}" alt=" ${official} flag" id='${official}'/>
     <p class='countries__name'>${official}</p>
  </li>
   `;
    })
    .join('');

  countryList.innerHTML = count;
}

function optionsForNeedCountry(countries) {
  if (countries.length > 10) {
    infoMessage();
    return;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    createСountryList(countries);

    return;
  }

  createСountry(countries);
}

function errorMessage(err) {
  Notify.failure(err.message);
}
function infoMessage(inf) {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
