function e(e){return fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>e.json()))}document.querySelector("#search-box").addEventListener("input",(function(n){e(n.currentTarget.value).then((e=>{e.map((e=>{e.name})).join("")}))}));
//# sourceMappingURL=index.a9bbb8b1.js.map
