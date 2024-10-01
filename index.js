import{i as l,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="46287903-5c8c629b6ba927f49057e3500",g="https://pixabay.com/api/";async function h(r,n=1,s=18){const o=`${g}?key=${p}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${s}`;try{const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error("Error fetching images:",e),e}}function y(r){return r.map(({webformatURL:n,largeImageURL:s,tags:o,likes:e,views:t,comments:a,downloads:d})=>`
        <div class="photo-card">
          <a href="${s}">
            <img src="${n}" alt="${o}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> <span>${e}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span>${t}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span>${a}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span>${d}</span>
            </p>
          </div>
        </div>`).join("")}function b(r){r.innerHTML=""}let f="",u=1,i,c;document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#search-form");if(i=document.querySelector(".gallery"),!r){console.error('Element with id "search-form" not found!');return}if(!i){console.error('Element with class "gallery" not found!');return}r.addEventListener("submit",w)});async function w(r){if(r.preventDefault(),f=r.currentTarget.elements.searchQuery.value.trim(),!f){l.warning({title:"Warning",message:"Search query cannot be empty"});return}b(i),u=1,L()}async function L(){try{const r=await h(f,u);if(r.hits.length===0){l.error({title:"Error",message:"Sorry, no images found!"});return}const n=y(r.hits);i.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new m(".gallery a")}catch{l.error({title:"Error",message:"Something went wrong. Please try again later."})}}
//# sourceMappingURL=index.js.map
