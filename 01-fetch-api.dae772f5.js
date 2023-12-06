!function(){var n={cardContainer:document.querySelector(".js-card-container")};fetch("https://pokeapi.co/api/v2/ability/8").then((function(n){return n.json()})).then((function(o){console.log(o);var c=pokemonCardTpl(o);console.log(c),n.cardContainer.innerHTML=c})).catch((function(n){console.log(n)}))}();
//# sourceMappingURL=01-fetch-api.dae772f5.js.map
