import '../css/common.css';
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
const refs ={
    cardContainer: document.querySelector('.js-card-container')
}

// щоб отримати колекцію покемонів 
fetch('https://pokeapi.co/api/v2/ability/8')
.then(response => {

    return response.json();
})
.then(pokemon => {
    console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     console.log(markup);
// refs.cardContainer.innerHTML = markup;

})
.catch(error => {
    console.log(error);
});

// перепишемо код зверху так, щоб він міг працювати з з любими даними і незалежно

// 1 винесемо в окрему функцію малювання покемона 