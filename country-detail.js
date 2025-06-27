// country-detail.js
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const container = document.getElementById('country-detail-container');
const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,borders,cca3,languages,currencies';

let allCountries = [];

async function fetchAndRender() {
  container.innerHTML = '<p>Loading...</p>';
  try {
    const res = await fetch(API_URL);
    allCountries = await res.json();
    const country = allCountries.find(c => c.cca3 === code);
    if (!country) {
      container.innerHTML = '<p>Country not found.</p>';
      return;
    }
    renderCountryDetail(country);
  } catch (e) {
    container.innerHTML = '<p>Failed to load country details.</p>';
  }
}

function renderCountryDetail(country) {
  const borders = (country.borders || []).map(code => {
    const borderCountry = allCountries.find(c => c.cca3 === code);
    return borderCountry ? `<a class="border-btn" href="country-detail.html?code=${borderCountry.cca3}">${borderCountry.name.common}</a>` : '';
  }).join(' ');
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  const currencies = country.currencies ? Object.values(country.currencies).map(cur => cur.name + (cur.symbol ? ` (${cur.symbol})` : '')).join(', ') : 'N/A';
  const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common;
  const subregion = country.subregion || 'N/A';
  const tld = country.tld ? country.tld.join(', ') : 'N/A';

  container.innerHTML = `
    <div class="country-detail-bento">
      <div class="bento-flag">
        <img class="country-flag-large" src="${country.flags.svg}" alt="Flag of ${country.name.common}">
      </div>
      <div class="bento-info">
        <h2>${country.name.common}</h2>
        <div class="bento-meta-grid">
          <div class="bento-meta-col">
            <div><span class="meta-label">Native Name:</span> <span class="meta-value">${nativeName}</span></div>
            <div><span class="meta-label">Population:</span> <span class="meta-value">${country.population.toLocaleString()}</span></div>
            <div><span class="meta-label">Region:</span> <span class="meta-value">${country.region}</span></div>
            <div><span class="meta-label">Sub Region:</span> <span class="meta-value">${subregion}</span></div>
            <div><span class="meta-label">Capital:</span> <span class="meta-value">${country.capital ? country.capital[0] : 'N/A'}</span></div>
          </div>
          <div class="bento-meta-col">
            <div><span class="meta-label">Top Level Domain:</span> <span class="meta-value">${tld}</span></div>
            <div><span class="meta-label">Currencies:</span> <span class="meta-value">${currencies}</span></div>
            <div><span class="meta-label">Languages:</span> <span class="meta-value">${languages}</span></div>
          </div>
        </div>
        <div class="bento-borders">
          <span class="meta-label">Border Countries:</span> ${borders || 'None'}
        </div>
      </div>
    </div>
  `;
}

fetchAndRender();
