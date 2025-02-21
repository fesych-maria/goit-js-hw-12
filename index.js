import{S as n,a as c,i as m}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();function p(t){return`<li class="gallery-item">
          <div class="img-wrapper">
          <a href="${t.largeImageURL}" class="gallery-link">
          <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" />
          </a>
          </div>
          <ul class="img-text-list">
            <li class="img-text-item first-category">
              <p class="img-text-category">Likes</p>
              <p class="img-text-value">${t.likes}</p>
            </li>
            <li class="img-text-item second-category">
              <p class="img-text-category">Views</p>
              <p class="img-text-value">${t.views}</p>
            </li>
            <li class="img-text-item third-category">
              <p class="img-text-category">Comments</p>
              <p class="img-text-value">${t.comments}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Downloads</p>
              <p class="img-text-value">${t.downloads}</p>
            </li>
          </ul>
        </li>`}const u=new n(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const r=t.map(p).join("");return s.gallery.innerHTML=r,u.refresh(),r}const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20fill='%23FAFAFB'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.06%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062l-3.97-3.97-3.968%203.97a.753.753%200%200%201-1.225-.244.751.751%200%200%201%20.163-.818L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";c.defaults.baseURL="https://pixabay.com";function d(t){t.preventDefault();const r=s.searchInput.value.trim();r&&(s.gallery.innerHTML='<span class="loader"></span>',s.form.reset(),c.get("/api/",{params:{key:"48862080-31d0d2e2035ba3e1d36ba0d4d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>{const l=i.data.hits;if(l.length===0)throw new Error;g(l)}).catch(i=>{s.gallery.innerHTML="",m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",maxWidth:"432px",iconUrl:f})}))}const s={searchBtn:document.querySelector(".js-search-btn"),searchInput:document.querySelector(".js-search-field"),form:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery")};s.form.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
