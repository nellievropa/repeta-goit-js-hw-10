!function(){var n,t={cardContainer:document.querySelector(".js-card-container")};fetch("https://pokeapi.co/api/v2/ability/".concat(n)).then((function(n){return n.json()})).then((function(n){var o=pokemonCardTpl(n);t.cardContainer.innerHTML=o})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=01-fetch-api.d29e77c5.js.map
