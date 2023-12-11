const API_KEY = '15038c1cf1024f0f88ddd0a11fc0f440';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
    headers: {
        Authorization: API_KEY,
    },
    };
    // відповідає за збереження терміну запросу і номер групи(бо на сторінці ми отримаємо групу даних) 
export default class NewsApiService {
    constructor() {
this.searchQuery = '';
this.page = 1;
    }
// метод просто забираає статті з бекенду і повертає статті, що він забрав, у зовнішній код
    fetchArticles() {
        // console.log('До запросу: ', this);
   
            const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}`;
            
          // робимо запит, і якщо він вдалий, то збільшуємо сторінку на 1(якщо не вдалий нам це не треба)
        //   щоб мати можливість створити зовнішній вигляд статті у зовнішньому коді, нам  потрібно повернути цей fetch у зовнішній код командою return
        return fetch(url, options)
            .then(response => response.json())
            .then(({articles}) => {
                // console.log(data);
                // this.page += 1; винесли у зовнішній код
                this.incrementPage();
                console.log('Після запросу: ', this);

                return articles;
            });
    }

// можна винестиу зовнішній код додавання сторінки 

incrementPage() {
    this.page += 1;
}
// сторінка повинна оновлюватись при новому запиті і починати шукати з 1-ї сторінки знову, тому робимо reset()
resetPage() {
    this.page = 1;
}

// контролює термін запроса: отримати і зберегти
    // збережемо нашу змінну класу searchQuery
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}