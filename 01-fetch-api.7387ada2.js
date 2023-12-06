const o={cardContainer:document.querySelector(".js-card-container")};fetch("https://pokeapi.co/api/v2/ability/8").then((o=>o.json())).then((n=>{console.log(n);const e=pokemonCardTpl(n);console.log(e),o.cardContainer.innerHTML=e})).catch((o=>{console.log(o)}));
//# sourceMappingURL=01-fetch-api.7387ada2.js.map
