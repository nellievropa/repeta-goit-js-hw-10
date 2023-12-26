


const BASE_URL = 'https://the-one-api.dev/v2';
const END_POINT = 'character';
const KEY = 'fP9PYRN - X34XoDXpvVl1';

function getCharacter() {
    const param = new URLSearchParams({
        limit: 20,
        page: 1,
    })

    const option = {
        method: 'GET',
        headers: {
        Authorization: `Bearer${KEY}`
        }
    }

    fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(resp => console.log(resp))
}

getCharacter();