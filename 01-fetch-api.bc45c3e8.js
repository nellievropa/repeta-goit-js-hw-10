!function(){var e={fetchPokemonById:function(e){var n="".concat("https://pokeapi.co/api/v2","/pokemon/").concat(e);return fetch(n).then((function(e){return e.json()}))}};var n={cardContainer:document.querySelector(".js-card-container"),saerchForm:document.querySelector(".js-search-form")};function t(e){var t=pokemonCardTpl(e);n.cardContainer.innerHTML=t}function o(e){alert("УПС... щось пішло не так!")}n.saerchForm.addEventListener("submit",(function(n){n.preventDefault();var r=n.currentTarget;console.log(r.elements);var c=r.elements.query.value;e.fetchPokemonById(c).then(t).catch(o).finally((function(){r.reset()}))})),fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then((function(e){return e.json()})).then(console.log),fetch("https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=yellow+flowers&image_type=photo").then((function(e){return e.json()})).then(console.log);fetch("https://newsapi.org/v2/everything?q=car",{headers:{"X-Api-Key":"4330ebfabc654a6992c2aa792f3173a3"}}).then((function(e){return e.json()})).then(console.log)}();
//# sourceMappingURL=01-fetch-api.bc45c3e8.js.map
