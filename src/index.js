// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// import { fetchCountries } from "./fetchCountries.js";

// const DEBOUNCE_DELAY = 300;

// const refs =  {
//         searchBox: document.querySelector("#search-box"),
//         countryList: document.querySelector(".country-list"),
//         countryInfo: document.querySelector(".country-info"),
// };

// refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// function onSearch(event) {
//     // метод preventDefault() запрещает странице перезагружаться во время введения запроса
//     event.preventDefault();
    
//     // метод trim() выполняет санитизацию введенной строки (срезает пробелы по бокам при вводе текста)
//     const inputText = refs.searchBox.value.trim();
    
//         if (inputText === '') {
//             resetMarkup();
//             return;
//     }
//         // вызывает функцию, которая делает запрос на back-end
//         fetchCountries(inputText)
//         // при успешном выполнении промиса -> выполняет функцию, котрая добавляет разметку
//         .then(renderCountryCard)
//         // в случае наличия ошибки -> вызывает функцию, которая показывает ошибку
//         .catch(onFetchError);
//     }


// function resetMarkup() {
//     refs.countryList.innerHTML = '';
//     refs.countryInfo.innerHTML = '';
// }

// function renderCountryCard(data) {
//     resetMarkup();
    
//     // если количество найденых стран больше 10 - показывает предупреждение
//     if (data.length > 10) { 
//         return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');      
//         } 
    
//     // если количество найденых стран больше 1 и меньше 10 - создается разметка со списокм стран
//     if (data.length > 1 && data.length <= 10) {
//         refs.countryList.innerHTML = createMarkupList(data);
//     }

//     // если найдена 1 страна - создается разметка информации о стране
//     if (data.length === 1) {
//         refs.countryInfo.innerHTML = createMarkupCountryInfo(data[0]);
//     }
// }

// function createMarkupList(data) {
//     return data
//     .map(({ name, flags }) => {
//         return `
//         <li class="country-list__item">
//             <img class="country-list__img" src="${flags.svg}" alt="Flag of ${name.official}">
//             <span>${name.official}</span>
//         </li>
//         `;
//     })
//     .join('');
// }

// function createMarkupCountryInfo({ name, capital, population, flags, languages }) {
//     return `
//         <p>
//             <img class="country-list__img" src="${flags.svg}" alt="Flag of ${name.official}">
//             <span class="country-list__name">${name.official}</span>
//         </p>
//         <p>
//             <span class="country-list__label">Capital: </span>
//             ${capital}
//         </p>
//         <p>
//             <span class="country-list__label">Population: </span>
//             ${population}
//         </p>
//         <p>
//             <span class="country-list__label">Languages: </span>
//             ${Object.values(languages).join(', ')}
//         </p>
//         `;
// }


// function onFetchError(error) {
//         resetMarkup();
//         return Notiflix.Notify.failure('Oops, there is no country with that name');
// }
