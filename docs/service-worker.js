const cacheName="static-1",resources=["/todo-vue/","/todo-vue/index.html","/todo-vue/bundle.js"],addResourcesToCache=async e=>{const t=await caches.open(cacheName);await t.addAll(e)},cacheFirst=async e=>{const t=await caches.match(e);if(t)return t;try{return await fetch(e)}catch(e){return new Response("Network error happened",{status:408,headers:{"Content-Type":"text/plain"}})}};self.addEventListener("install",(async e=>{e.waitUntil(addResourcesToCache(resources))})),self.addEventListener("fetch",(e=>{e.respondWith(cacheFirst(e.request))}));