!function(){function n(n){return fetch("https://restcountries.com/v3.1/name/".concat(n)).then((function(n){return n.json()}))}document.querySelector("#search-box").addEventListener("input",(function(t){n(t.currentTarget.value).then((function(n){n.map((function(n){n.name})).join("")}))}))}();
//# sourceMappingURL=index.758ce30a.js.map
