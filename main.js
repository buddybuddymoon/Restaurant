!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n,o=1;function d(e,t,n){const o=document.createElement("input");o.type="radio",o.name="tabs",o.id=`tabs${t}`,e.appendChild(o),1==t&&(o.checked=!0);const d=document.createElement("label");d.htmlFor=`tabs${t}`,d.textContent=n,e.appendChild(d);const i=document.createElement("div");i.classList.add("tab"),e.appendChild(i);const s=document.createElement("div");s.classList.add("footbar"),"MENU"!=n&&"LOCATION"!=n||s.classList.add("center"),e.appendChild(s),function(e){const t=document.createElement("a");t.href="#",t.classList.add("foottext");const n=document.createElement("img");n.classList.add("footer"),n.src="dist/githublogo.png",n.setAttribute("onclick",'window.open("https://github.com/buddybuddymoon")'),t.appendChild(n);const o=document.createElement("img");o.classList.add("footer"),o.src="dist/LinkedIn_logo_initials.png",o.setAttribute("onclick",'window.open("https://www.linkedin.com/in/moon-lee-003baa86/")'),t.appendChild(o),e.appendChild(t);const d=document.createElement("p");d.textContent="| Created By: Moon Young Lee | (111)-111-1111",d.style.marginLeft="5px",d.classList.add("foottext"),e.appendChild(d)}(s)}function i(e){console.log(e),clearTimeout(n),c(o+=e)}function s(e,t){const n=document.createElement("div");n.classList.add("mySlides","fade");const o=document.createElement("img");o.style.width="100%",o.style.height="600px",o.src=`dist/food${t}.jpg`,n.appendChild(o),e.appendChild(n)}function c(e){let t,d=document.getElementsByClassName("mySlides");for(e>d.length?o=1:e<1&&(o=d.length),t=0;t<d.length;t++)d[t].style.display="none";d[o-1].style.display="block",n=setTimeout((function(){o+=1,c(o)}),5e3)}navbar=function(){const e=document.createElement("div");let t=0;e.id="navbar",e.classList.add("tabs"),document.body.insertBefore(e,document.body.firstChild);const n=document.createElement("img");n.src="dist/logo.png",n.classList.add("logo"),e.appendChild(n),names=["RESTAURANT MOON.","ABOUT","MENU","LOCATION"];for(let n=0;n<4;n++)t+=1,d(e,t,names[n]);const a=document.getElementsByClassName("tab");!function(e){const t=document.createElement("div");t.classList.add("slideshow-container");for(let e=0;e<=4;e++)s(t,e);e.appendChild(t);const n=document.createElement("a");n.classList.add("prev"),n.addEventListener("click",(function(){i(-1)})),n.innerHTML="&#10094";const d=document.createElement("a");d.classList.add("next"),d.addEventListener("click",(function(){i(1)})),d.innerHTML="&#10095",e.appendChild(n),e.appendChild(d),c(o)}(a[0]),function(e){const t=document.createElement("p");t.classList.add("about"),t.textContent="About RESTAURANT Moon.",e.appendChild(t);const n=document.createElement("div");n.classList="info",n.style.display="inline-block";const o=document.createElement("h1");o.textContent="Chef Moon's Restaurant:";const d=document.createElement("div");d.classList.add("wording"),d.textContent=" Chef Moon has been cooking since the last decade, and his one and only goal is to make every customer happier than they were once they taste his delicious foods. Everything on the menu is freshtly made with care. You will not be disappointed!";const i=document.createElement("br"),s=document.createElement("div");s.classList.add("wording"),s.textContent="Resturant Moon. is the fine dining that you can enjoy the world-class brunch filled with Chef’s creative mix.",n.appendChild(o),n.appendChild(s),n.appendChild(i),n.appendChild(d),e.appendChild(n);const c=document.createElement("img");c.src="dist/About_page.png",c.style.width="50%",c.style.height="400px",c.style.display="inline-block",e.appendChild(c)}(a[1]),function(e){const t=document.createElement("img");t.src="dist/menu.jpg",t.style.display="block",t.style.margin="auto",e.appendChild(t)}(a[2]),function(e){const t=document.createElement("iframe");console.log(t),t.classList.add("centering"),t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105797.416468062!2d-118.42078918346961!3d34.039528942727905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ab1e575a704621c!2sRepublique!5e0!3m2!1sen!2sus!4v1579052575523!5m2!1sen!2sus",t.width="600",t.height="450",t.frameborder="0",t.style="border:0;",t.allowfullscreen="",e.appendChild(t)}(a[3])}()}]);