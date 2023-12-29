


// const BASE_URL = 'https://the-one-api.dev/v2';
// const END_POINT = 'character';
// const KEY = 'fP9PYRN - X34XoDXpvVl1';

// function getCharacter() {
//     const param = new URLSearchParams({
//         limit: 20,
//         page: 1,
//     })

//     const option = {
//         method: 'GET',
//         headers: {
//         Authorization: `Bearer ${KEY}`
//         }
//     }

//     fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(resp => console.log(resp))
// }

// getCharacter();

const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
// const API_KEY = '345007f9ab440e5b86cef51be6397df1';
const API_KEY = '75a59728a8a611489d2b48a322755689';
const list = document.querySelector(".js-list");
const loadMore = document.querySelector('.js-load');
// створюємо змінну, яка буде зберігати номер сторінки
let currentPage = 1;

loadMore.addEventListener('click', onload)

// ця функція має відповідати за номер сторінки
// Обов'язково треба робити перевірку, чи є можливість завантажити наступну сторінку!
function onload() {
    // після того, як натисли кнопку Лоад море, збільшуємо номер її на 1 
    currentPage += 1
    // викликати функцію getTranding і передати в неї поточну сторінку
    getTranding(currentPage)
        .then((data) => {
            list.insertAdjacentHTML('beforeend', createMarkup(data.results))
            if (data.page === data.total_pages) {
                loadMore.hidden = true;
            }
    })
    .catch(error => console.log(error));
}

function getTranding(page=1) {
    return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return resp.json();
    });
}

// щоб показати кнопку після першої розмітки додаємо в перший then {}
// пагінація повинна віддавати номер поточної сторінки і загальну кількість сторінок - і нам треба перевірити на якій ми зараз
getTranding()
    .then((data) => {
list.insertAdjacentHTML('beforeend', createMarkup(data.results))
        if (data.page !== data.total_pages) {
        loadMore.hidden = false
    }})
    // просто подивитися, що прийшло
    // .then(data => console.log(data))
    .catch(error => console.log(error));

function createMarkup(arr){
    return arr.map(({ poster_path, title }) => `<li>
    <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
        <h2>${title}</h2>
    </li>`).join('')
}

