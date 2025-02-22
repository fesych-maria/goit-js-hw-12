import{S as g,a as n,i as d}from"./assets/vendor-BDaiwwc1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20fill='%23FAFAFB'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.06%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062l-3.97-3.97-3.968%203.97a.753.753%200%200%201-1.225-.244.751.751%200%200%201%20.163-.818L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function h(e){return`<li class="gallery-item">
          <div class="img-wrapper">
          <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img" />
          </a>
          </div>
          <ul class="img-text-list">
            <li class="img-text-item first-category">
              <p class="img-text-category">Likes</p>
              <p class="img-text-value">${e.likes}</p>
            </li>
            <li class="img-text-item second-category">
              <p class="img-text-category">Views</p>
              <p class="img-text-value">${e.views}</p>
            </li>
            <li class="img-text-item third-category">
              <p class="img-text-category">Comments</p>
              <p class="img-text-value">${e.comments}</p>
            </li>
            <li class="img-text-item">
              <p class="img-text-category">Downloads</p>
              <p class="img-text-value">${e.downloads}</p>
            </li>
          </ul>
        </li>`}const y=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(e){const a=e.map(h).join("");return s.gallery.insertAdjacentHTML("beforeend",a),y.refresh(),a}n.defaults.baseURL="https://pixabay.com";async function u(e){try{const a=await n.get("/api/",{params:e}),i=a.data.hits;if(e.totalHits=a.data.totalHits,i.length===0)throw new Error;v(i),f()}catch{b(),d.error(L)}}const s={searchBtn:document.querySelector(".js-search-btn"),searchInput:document.querySelector(".js-search-field"),form:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".load-btn"),loader:document.querySelector(".loader")},L={position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",maxWidth:"432px",iconUrl:p};s.form.addEventListener("submit",x);s.loadBtn.addEventListener("click",w);const l={key:"48862080-31d0d2e2035ba3e1d36ba0d4d",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40};async function x(e){e.preventDefault(),m();const a=s.searchInput.value.trim();a&&(l.q=a,l.page=1,s.gallery.innerHTML="",s.form.reset(),await u(l))}async function w(){m(),l.page+=1,await u(l),S(),f()}function b(){s.loader.classList.add("visually-hidden")}function m(){s.loader.classList.remove("visually-hidden"),s.loadBtn.classList.add("visually-hidden")}function f(){s.loader.classList.add("visually-hidden"),s.loadBtn.classList.remove("visually-hidden")}function S(){const e=Math.ceil(l.total/l.per_page);l.page>=e&&(d.info({message:"We're sorry, but you've reached the end of search results."}),s.loadBtn.classList.add("visually-hidden"))}
//# sourceMappingURL=index.js.map
