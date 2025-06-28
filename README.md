## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [My Country API project](https://https://countries-project-ruddy.vercel.app/index.html.com)
- Live Site URL: [Countries API](https://countries-project-ruddy.vercel.app/index.html)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript
- Mobile-first workflow


### What I learned
 
- How to fetch data fron the restCountries API
- Pagination 
- New Filtering method 

## Author
- Linkden - [NifemiBello](https://www.twitter.com/yourusername)


## Acknowledgments

```CHATGPT``` - For putting me through some new concepts like Pagination and generating some template code in the file.


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
- `country-detail.html` – Sub HTML file displaying additonal information about the country
- `country-detail.js` – JS file for the details page (```country-detail.html```)
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
- Challenge by [Inventors Community](https://inventors.com)
- Data from [REST Countries API](https://restcountries.com/)

---
Feel free to further customize this project or use it as a starter for your own country explorer!
