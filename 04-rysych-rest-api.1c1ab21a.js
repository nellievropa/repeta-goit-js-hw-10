const e=document.querySelector(".js-search");document.querySelector(".js-list");e.addEventListener("submit",(function(e){e.preventDefault();const{query:t,days:o}=e.currentTarget.elements;(function(e,t){return fetch(`http://api.weatherapi.com/v1/forecast.json?key=bc046e36b7d642a2a0294826231312&q=${e}&days=${t}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))})(t.value,o.value).then((e=>console.log(e))).catch((e=>console.log(e))),console.log(t),console.log(o)}));
//# sourceMappingURL=04-rysych-rest-api.1c1ab21a.js.map
