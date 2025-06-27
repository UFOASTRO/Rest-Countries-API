# REST Countries Explorer

A responsive web app to explore country data using the [REST Countries API](https://restcountries.com/). Built as a Frontend Mentor challenge.

## Features
- See all countries on the homepage
- Search countries by name
- Filter countries by region
- Sort by population (ascending/descending)
- Pagination (load more countries)
- Click a country to view detailed info in a modal
- Click border countries to navigate between them
- Responsive layout for mobile and desktop
- Light and dark mode toggle (remembers your choice)

## How to Run
1. Download or clone this repository.
2. Open `index.html` in your browser. No build step is required.

## File Structure
- `index.html` – Main HTML file with all UI elements
- `style.css` – Modern, responsive styles (light/dark mode included)
- `script.js` – Handles fetching, filtering, sorting, pagination, and modal logic

## Customization/Tweaks
- To change the number of countries per page, edit `PAGE_SIZE` in `script.js`.
- To add more fields, update the API URL and card rendering logic in `script.js`.
- For more color or font tweaks, edit `style.css`.

## Notes
- All data is fetched live from the REST Countries API.
- No build tools or frameworks required.
- For accessibility, all interactive elements are keyboard and screen reader friendly.

## Credits
- Challenge by [Frontend Mentor](https://www.frontendmentor.io/)
- Data from [REST Countries API](https://restcountries.com/)

---
Feel free to further customize this project or use it as a starter for your own country explorer!
