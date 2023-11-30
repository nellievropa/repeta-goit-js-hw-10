const n={cardContainer:document.querySelector(".js-card-container")};var o;fetch(`https://pokeapi.co/api/v2/ability/${o}`).then((n=>n.json())).then((function(o){const t=pokemonCardTpl(o);n.cardContainer.innerHTML=t})).catch((n=>console.log(n)));
//# sourceMappingURL=01-fetch-api.f48d4103.js.map
