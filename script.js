const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,borders,cca3';
const countriesList = document.getElementById('countries-list');
const searchInput = document.getElementById('search-input') || document.getElementById('search');
const regionFilter = document.getElementById('region-filter') || document.getElementById('filterInput');
const sortPopulation = document.getElementById('sort-population');
const loadMoreBtn = document.getElementById('load-more');
const modal = document.getElementById('country-modal');
const darkModeBtn = document.getElementById('dark-mode-toggle') || document.getElementById('dark-mode-button');

let allCountries = [];
let filteredCountries = [];
let currentIndex = 0;
const PAGE_SIZE = 20;

async function fetchCountries() {
  countriesList.innerHTML = '<p>Loading...</p>';
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    allCountries = data;
    filteredCountries = [...allCountries];
    renderCountries(true);
  } catch (e) {
    countriesList.innerHTML = '<p>Failed to load countries.</p>';
  }
}

function renderCountries(reset = false) {
  if (reset) {
    countriesList.innerHTML = '';
    currentIndex = 0;
  }
  const nextCountries = filteredCountries.slice(currentIndex, currentIndex + PAGE_SIZE);
  nextCountries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <img class="country-flag" src="${country.flags.svg}" alt="Flag of ${country.name.common}">
      <div class="country-info">
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      </div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `country-detail.html?code=${country.cca3}`;
    });
    card.addEventListener('keypress', e => { if (e.key === 'Enter') window.location.href = `country-detail.html?code=${country.cca3}`; });
    countriesList.appendChild(card);
  });
  currentIndex += PAGE_SIZE;
  loadMoreBtn.style.display = currentIndex < filteredCountries.length ? 'block' : 'none';
}

function filterCountries() {
  let name = searchInput.value.trim().toLowerCase();
  let region = regionFilter.value;
  filteredCountries = allCountries.filter(c => {
    let matchName = c.name.common.toLowerCase().includes(name);
    let matchRegion = !region || region === 'all' || c.region.toLowerCase() === region.toLowerCase();
    return matchName && matchRegion;
  });
  sortCountries();
  renderCountries(true);
}

function sortCountries() {
  if (!sortPopulation) return;
  if (sortPopulation.value === 'asc') {
    filteredCountries.sort((a, b) => a.population - b.population);
  } else if (sortPopulation.value === 'desc') {
    filteredCountries.sort((a, b) => b.population - a.population);
  }
}

// Event listeners
if (searchInput) searchInput.addEventListener('input', filterCountries);
if (regionFilter) regionFilter.addEventListener('change', filterCountries);
if (sortPopulation) sortPopulation.addEventListener('change', () => { sortCountries(); renderCountries(true); });
if (loadMoreBtn) loadMoreBtn.addEventListener('click', () => renderCountries());
window.onclick = e => { if (e.target === modal) modal.classList.add('hidden'); };

// Dark mode
if (darkModeBtn) {
  darkModeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  };
  // On load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

fetchCountries();
