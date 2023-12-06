import '../css/common.css';
import API from './api-service';
import getRefs from './get-refs';
// import Handlebars from "handlebars";
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

// const a = "0";
// const b = a ?? "b";
// const c = a || "c";


// console.log('hello world')
// https://pokeapi.co/
// const r = fetch('https://pokeapi.co/api/v2/ability/5')
// console.log(r);


// щоб достукатись до обёэкта додаэмо then і виводимо дані 

// fetch('https://pokeapi.co/api/v2/ability/5').then(data => {
//     console.log(data)
// });

// отримуємо responce i body:ReadableStream
// щоб розпакувати ReadableStream використовуємо один з методів 
// blob - поверне картинку, аудіо або відео
// json - поверне в форматі json
// text - поверне тектовий файл з даними(таблиці)

// тому наш запит буде виглядати так : піди принеси
// fetch('https://pokeapi.co/api/v2/pokemon/5')
// .then(response => {
//     // console.log(response.json());
//     // повернемо результат відповіді, щоб можно було з ним далі працювати і додати до нього наступний then
//     // розпарси відповідь
//     return response.json();
// })
// .then(pokemon => {
//     console.log(pokemon);
//     // якщо щось не так зроби catch
// })
// .catch(error => {
//     console.log(error);
// });

// Content-Type : text/css, 
// винесемо їх в окремий файл get-refs.js
// const refs = {
//     cardContainer: document.querySelector('.js-card-container'),
//     saerchForm: document.querySelector('.js-search-form')
// }
// після import виглядає так

const refs = getRefs();

refs.saerchForm.addEventListener('submit', onSearch)
// щоб отримати колекцію покемонів 
// fetch('https://pokeapi.co/api/v2/ability/8')
// .then(response => {

//     return response.json();
// })
// .then(pokemon => {
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     console.log(markup);
// refs.cardContainer.innerHTML = markup;

// })
// .catch(error => {
//     console.log(error);
// });

// перепишемо код зверху так, щоб він міг працювати з з любими даними і незалежно

// 3 тоді наш код буде виглядати так 

function onSearch(e) {
e.preventDefault();

// робимо динамічне звернення до ID pokemon
const form = e.currentTarget;
console.log(form.elements)
const searchQuery = form.elements.query.value;

// потім searchQuery передаємо як ID
// і після імпорту викликаємо цю функцію чере API.
API.fetchPokemonById(searchQuery)
.then(renderPockemonCard)
.catch(onCatchError
//     error => {
//     // а потім виносимо все в окрему функцію
//     console.log('ЦЕ CATCH!!!');

//     alert('УПС... щось пішло не так!')
// }
)
.finally(()=> {
form.reset();
});

}

// 2 винесемо в функцію отримання Промісу і його розпакування (ренедерення) за дропомогою JSON
// function fetchPokemonById(pokemonId) {
//     // винесемо в крему змінну посилання URL
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
//    return fetch(url).then(
//     response => {
//     return response.json();
//    },
//    );
// }
// а потім винесемо її в допоміжний файл api-service.js


// 1 винесемо в окрему функцію малювання покемона 
function renderPockemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon);
    // console.log(markup);
refs.cardContainer.innerHTML = markup;
}

// 4 помилка

function onCatchError(error) {
    alert('УПС... щось пішло не так!');
}

// _____________________________________

fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
.then(r => r.json())
.then(console.log);



fetch('https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=yellow+flowers&image_type=photo')
.then(r => r.json())
.then(console.log);

// щоб розширити можливості пошуків розбиваємо запроси

const url = 'https://newsapi.org/v2/everything?q=car';
const options ={
    headers: {
        'X-Api-Key': '4330ebfabc654a6992c2aa792f3173a3'
    },
}

fetch(url, options)
.then(r => r.json())
.then(console.log)