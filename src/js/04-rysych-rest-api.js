// fetch('https://swapi.dev/api/people')
//     .then(r => r.json())
// .then(console.log);


// const API_KEY_WEATHER = 'bc046e36b7d642a2a0294826231312';
// fetch('http://api.weatherapi.com/v1')
//     .then(r => r.json())
//     .then(console.log);
const search = document.querySelector('.js-search');
search.addEventListener('submit', onShowWeather);

function onShowWeather(evt) {
    evt.preventDefault();
    // робимо деструктуризацію по name
    const { query, days } = evt.currentTarget.elements;
    getWeather(query.value, days.value)
    .then(data => console.log(data))
    .catch(error => console.log(error));
    console.log(query);
    console.log(days);
}

function getWeather(city, days) {
    // http://api.weatherapi.com/v1/forecast.json?key=bc046e36b7d642a2a0294826231312&q=Paris&days=7
    const BASE_URL = 'http://api.weatherapi.com/v1';
    const API_KEY_WEATHER = 'bc046e36b7d642a2a0294826231312';
// щоб далі можна було парсити цей проміс його треба повернути!!!RETURN
    return fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY_WEATHER}&q=${city}&days=${days}`
    ).then((resp) => {
        // console.log(resp.json())
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
    });
  
}
// викликаємо функцію і парсимо її далі!!! 
// getWeather('Lviv', 7)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// у відповіді ми отримаємо Ок: зі статусом тру або фальс
// і його треба зразу опрацювати, щоб знати той статус, і робиться це в першому then
// якщо відповідь не Ок, робимо примусову помилку зі статусом із Responce
    // if (!responce.ok) { throw new Error(responce.statusText)}