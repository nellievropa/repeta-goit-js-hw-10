// import articlesTpl from '../templates/articles.hbs'
import '../css/common.css';
import NewsApiService from './news-components';
import LoadMoreBtn from './components/load-more-btn';



const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles'),
    loadMoreBtn: document.querySelector('[data-action="load more"]')
};
// створюємо екземпляр классу NewsApiService
const newsApiService = new NewsApiService();

// для кнопки
const loadMoreBtn = new LoadMoreBtn('[data-action="load more"]');

const articlesList = document.querySelector(".articles");
console.log(newsApiService);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
// щоб прибрати цю глобальну змінну ми в класі NewsApiService створимо її заміну this.searchQuery = ''; і там же будемо її запам'ятовувати
// let searchQuery ='';
// і тоді ми можемо її прибрати звідси

function onSearch(e) {
    // щоб не перезавантажувалась сторінка робимоа preventDefault
    e.preventDefault();

// очищуємо сторінку перед новим запитом
// clearArticlesContainer();

// отримуєм доступ до форми, щоб читати запити
// тут достукуємось також до цієї змінної
//  searchQuery = e.currentTarget.elements.query.value
newsApiService.query = e.currentTarget.elements.query.value;

// без GET i SET верхній запис буде виглядати так 
// newsApiService.searchQuery = e.currentTarget.elements.query.value; тоді треба замінити на searchQuery всюди

// напишемо попередження про пусту строку
if(newsApiService.query === '') {
    return alert(`Please, make a request!`)
}
// під час сабміту сторінка буде онвлюватись до 1-ї, коли ми пишемо новий запит
newsApiService.resetPage();
// При сабміті форми треба викликати сторінку на  newsapi.org
    // const options = {
    //     headers: {
    //         Authorization: '15038c1cf1024f0f88ddd0a11fc0f440',
    //     },
    //     };
        
    //     const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=8&page=1`;
        
        
    //     fetch(url, options)
    //     .then(r => r.json)
    //     .then(console.log());
    // всю цю логіку виносимо в окремий спеціально створений файл news-components
    // і після того, як ми створили екземпляр классу NewsApiService і викликали його вище, звертаємось до нього
    // а  searchQuery  передаємо йому як аргумент
// тут додаємо articles
    newsApiService.fetchArticles().then(articles => {
        clearArticlesContainer();
        appendArticlesMarkup(articles)
    });
}

// ми хочемо підгружати наступні сторінки при натисканні кнопки "Показати ще"
// робим те саме, АЛЕ маємо проблему як достукатися до змінної const searchQuery ,якщо вона існує тільки в попередній функції?
// тобто під час сабміту (натискання кнопки "Пошук") ми повинні зберігати десь ці данні, щоб потім їх взяти звідти! використовуємо LET
function onLoadMore() {
    // const options = {
    //     headers: {
    //         Authorization: '15038c1cf1024f0f88ddd0a11fc0f440',
    //     },
    //     };
        
    //     const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=8&page=1`;
        
        
    //     fetch(url, options)
    //     .then(r => r.json)
    //     .then(console.log());
    // в цій функції все робимо аналогічно
    newsApiService.fetchArticles().then(appendArticlesMarkup);
}

// що створити розмітку зробимо функцію

function appendArticlesMarkup(articles) {
    // refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
    const markup = articles
    .map(({ urlToImage, title, author, description }) => {
      return `<li>
      <img src="${urlToImage}" alt="" width="480">
      <h2>${title}</h2>
      <p>Posted by: ${author}</p>
      <p>${description}</p>

       </li>`;
    })
    .join("");
    articlesList.innerHTML = markup;
}

// при кожному новому запиті треба очищати контайнер, щоб виводилось не в кінці попереднього запиту, а зверху і знову

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}




