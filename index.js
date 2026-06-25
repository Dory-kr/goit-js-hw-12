import{a as S,S as P,i as a}from"./assets/vendor-CucEYOFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const q="56445035-b18e3991649a74824eb44e6b3",R="https://pixabay.com/api/",B=15;async function f(t,s){return(await S.get(R,{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:B}})).data}const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const s=t.map(({webformatURL:r,largeImageURL:c,tags:e,likes:o,views:n,comments:v,downloads:w})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${c}">
            <img class="gallery-image" src="${r}" alt="${e}" />
          </a>

          <div class="image-info">
            <p class="info-item">
              <span class="info-title">Likes</span>
              <span class="info-value">${o}</span>
            </p>
            <p class="info-item">
              <span class="info-title">Views</span>
              <span class="info-value">${n}</span>
            </p>
            <p class="info-item">
              <span class="info-title">Comments</span>
              <span class="info-value">${v}</span>
            </p>
            <p class="info-item">
              <span class="info-title">Downloads</span>
              <span class="info-value">${w}</span>
            </p>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",s),M.refresh()}function $(){d.innerHTML=""}function y(){m.classList.add("is-visible")}function L(){m.classList.remove("is-visible")}function b(){g.classList.add("is-visible")}function l(){g.classList.remove("is-visible")}const E=document.querySelector(".form"),O=document.querySelector(".load-more");let p="",u=1,i=0;l();E.addEventListener("submit",x);O.addEventListener("click",A);async function x(t){t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(s===""){a.warning({message:"Please enter a search query",position:"topRight"});return}p=s,u=1,i=0,$(),l(),y();try{const r=await f(p,u);if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(h(r.hits),i+=r.hits.length,i>=r.totalHits){l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}b()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),t.currentTarget.reset()}}async function A(){u+=1,l(),y();try{const t=await f(p,u);if(h(t.hits),i+=t.hits.length,H(),i>=t.totalHits){l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}b()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}}function H(){const t=document.querySelector(".gallery-item");if(!t)return;const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
