
const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
// const API_KEY = '345007f9ab440e5b86cef51be6397df1';
const API_KEY = '75a59728a8a611489d2b48a322755689';
const list = document.querySelector(".js-list");
// const loadMore = document.querySelector('.js-load');
// створюємо змінну, яка буде зберігати номер сторінки
// let currentPage = 1;

// let options = {
//   root: null,
//   rootMargin: "200px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);
// function callback(evt) {
//     console.log(evt)
// }
// // на екземплярі класа треба викликати цей метод

// const target = document.querySelector('.js-guard');

// loadMore.addEventListener('click', onload)

// ця функція має відповідати за номер сторінки
// Обов'язково треба робити перевірку, чи є можливість завантажити наступну сторінку!
// function onload() {
//     // після того, як натисли кнопку Лоад море, збільшуємо номер її на 1 
//     currentPage += 1
//     // викликати функцію getTranding і передати в неї поточну сторінку
//     getTranding(currentPage)
//         .then((data) => {
//             list.insertAdjacentHTML('beforeend', createMarkup(data.results))
          
//             if (data.page === data.total_pages) {
//                 loadMore.hidden = true;
//             }
//     })
//     .catch(error => console.log(error));
// }

// function getTranding(page=1) {
//     return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText)
//         }
//         return resp.json();
//     });
// }

// // щоб показати кнопку після першої розмітки додаємо в перший then {}
// // пагінація повинна віддавати номер поточної сторінки і загальну кількість сторінок - і нам треба перевірити на якій ми зараз
// getTranding()
//     .then((data) => {
// list.insertAdjacentHTML('beforeend', createMarkup(data.results))
//           // спостерігач спостерігай за нашим Target oject
//             observer.observe(target)
//         if (data.page !== data.total_pages) {
//         loadMore.hidden = false
//     }})
//     // просто подивитися, що прийшло
//     // .then(data => console.log(data))
//     .catch(error => console.log(error));

// function createMarkup(arr){
//     return arr.map(({ poster_path, title }) => `<li>
//     <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
//         <h2>${title}</h2>
//     </li>`).join('')
// }



// let counter = 0
// document.addEventListener('scroll', onScroll)


// function onScroll() {
//     counter += 1
//     console.log(counter)
// }


// const target2 = document.querySelector('.js-guard-test')
const target = document.querySelector('.js-guard');
let currentPage = 1;
let options = {
  root: null,
  rootMargin: "300px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoad, options);
// щоб слідкувати за другим об'ектом скролу- ми його підключили з іншим ім'ям
observer.observe(target2);
function onLoad(entries, observer) {
    // це щоб подивитися,що спрацювали обидва обзерви
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log(entries)
            currentPage += 1;
            getTranding(currentPage)
            .then((data) => {
        // відмальовка нашої сторінки
            list.insertAdjacentHTML('beforeend', createMarkup(data.results))
                // observer.observe(target)
                // щоб прибрати завантаження неіснуючих сторінок в кінці робимо умову
                if (data.page === data.total_pages) {
                    observer.unobbserve(target)
                }
    })
    .catch(error => console.log(error));
        }
    })
}
// на екземплярі класа треба викликати цей метод

function createMarkup(arr){
    return arr.map(({ poster_path, title }) => `<li>
    <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
        <h2>${title}</h2>
    </li>`).join('')
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
        // відмальовка нашої сторінки
            list.insertAdjacentHTML('beforeend', createMarkup(data.results))
          // спостерігач спостерігай за нашим Target oject
            observer.observe(target)
    })
    // просто подивитися, що прийшло
    .then(data => console.log(data))
    .catch(error => console.log(error));