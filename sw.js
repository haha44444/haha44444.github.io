if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),t={module:{uri:r},exports:o,require:f};i[r]=Promise.all(c.map((e=>t[e]||f(e)))).then((e=>(n(...e),o)))}}define(["./workbox-faaa562d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-b08aeeb0.js",revision:null},{url:"assets/index-c5881f16.css",revision:null},{url:"index.html",revision:"795a9dbe1f1544cb5820db59ca2c1555"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"5015c46eca2636c02d328749c2d6608d"},{url:"images/icon/72.png",revision:"c93b65a67800e3d5ee24d2f8c14f3ce5"},{url:"images/icon/96.png",revision:"6f2c2a7533c6a9223e501cb8796b1f5f"},{url:"images/icon/128.png",revision:"6f2c2a7533c6a9223e501cb8796b1f5f"},{url:"images/icon/144.png",revision:"2bd984b93cd64ed2f89f247c01ac0cc5"},{url:"images/icon/192.png",revision:"845ba6539eb08ce7148438bc511eb338"},{url:"images/icon/512.png",revision:"c8f6631ad483f1e785b719d700f3c7cd"},{url:"manifest.webmanifest",revision:"946ae6ef110d6199581b8c17325dd8bf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
