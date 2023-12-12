fetch('https://swapi.dev/api/people')
    .then(r => r.json())
.then(console.log);


fetch('http://api.weatherapi.com/v1')
    .then(r => r.json())
.then(console.log);
