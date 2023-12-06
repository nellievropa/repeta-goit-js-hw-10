import '../css/common.css';


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(r => r.json())
.then(console.log);


fetch('https://darksky.net/dev')
.then(r => r.json())
.then(console.log);