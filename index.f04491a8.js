async function e(e){const t=""+("https://pixabay.com/api/"+`?key=29559865-360b254a5abc6663dbbd46c59&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`);try{fetch(t).then((e=>e.json())).then((e=>console.log(e)))}catch(e){console.log(e)}}const t=document.querySelector('[name="searchQuery"]');document.querySelector("button").addEventListener("click",(o=>{o.preventDefault();return e(t.value.trim())}));
//# sourceMappingURL=index.f04491a8.js.map