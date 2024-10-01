import{i as l,S as h}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="46287903-5c8c629b6ba927f49057e3500",y="https://pixabay.com/api/";async function b(r,n=1,s=12){const o=`${y}?key=${g}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${s}`;try{const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error("Error fetching images:",e),e}}function L(r){return r.map(({webformatURL:n,largeImageURL:s,tags:o,likes:e,views:t,comments:a,downloads:p})=>`
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
              <b>Downloads</b> <span>${p}</span>
            </p>
          </div>
        </div>`).join("")}function w(r){r.innerHTML=""}let d="",f=1,u,i,c;document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#search-form");u=document.querySelector(".gallery"),i=document.querySelector(".load-more"),r.addEventListener("submit",$),i.addEventListener("click",v)});async function $(r){if(r.preventDefault(),d=r.currentTarget.elements.searchQuery.value.trim(),!d){l.warning({title:"Warning",message:"Search query cannot be empty"});return}w(u),f=1,i.classList.add("hidden"),m()}async function v(){f+=1,m()}async function m(){try{const r=await b(d,f);if(r.hits.length===0){l.error({title:"Error",message:"Sorry, no images found!"});return}const n=L(r.hits);u.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new h(".gallery a"),r.hits.length>0&&i.classList.remove("hidden")}catch{l.error({title:"Error",message:"Something went wrong. Please try again later."})}}
//# sourceMappingURL=index.js.map
