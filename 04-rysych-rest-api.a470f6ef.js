!function(){var n=document.querySelector(".js-search"),t=document.querySelector(".js-list");n.addEventListener("submit",(function(n){n.preventDefault();var e=n.currentTarget.elements,c=e.query,o=e.days;(function(n,t){var e="bc046e36b7d642a2a0294826231312";return fetch("".concat("http://api.weatherapi.com/v1","/forecast.json?key=").concat(e,"&q=").concat(n,"&days=").concat(t,"&lang=uk")).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))})(c.value,o.value).then((function(n){return t.innerHTML=n.forecast.forecastday.map((function(n){var t=n.date,e=n.day,c=e.avgtemp_c,o=e.condition,a=o.text,r=o.icon;return'<li>\n        <img src="'.concat(r,'" alt="').concat(a,'">\n        <p>').concat(a,"</p>\n        <h2>").concat(t,"</h2>\n        <h3>").concat(c,"</h3>\n    </li>")})).join("")})).catch((function(n){return console.log(n)})),console.log(c),console.log(o)}))}();
//# sourceMappingURL=04-rysych-rest-api.a470f6ef.js.map
