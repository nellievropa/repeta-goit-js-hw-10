export default class NewsApiService {
    constructor() {
this.searchQuery = '';
this.page = 1;
    }

    fetchArticles() {
        console.log(this);
        const options = {
            headers: {
                Authorization: '15038c1cf1024f0f88ddd0a11fc0f440',
            },
            };
            
            const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}`;
            
          // робимо запит, і якщо він вдалий, то збільшуємо сторінку на 1(якщо не вдалий нам це не треба)
            fetch(url, options)
            .then(r => r.json)
            .then(data => {
                this.page += 1;
            });
    }

    // збережемо нашу змінну класу searchQuery
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}