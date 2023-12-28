


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

function getTranding() {
    return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=5`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return resp.json();
    });
}
getTranding()
    .then(data => console.log(data))
    .catch(error => console.log(error));

function createMarkup(arr){
    return arr.map(({ poster_path, title }) => `<li>
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
        <h2>${title}</h2>
    </li>`).join('')
}