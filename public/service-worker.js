const cacheName = "static-1";

const resources = ["/todo-vue/", "/todo-vue/index.html", "/todo-vue/bundle.js"];

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  try {
    const responseFromNetwork = await fetch(request);
    return responseFromNetwork;
  } catch (error) {
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("install", async (event) => {
  event.waitUntil(addResourcesToCache(resources));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

self.addEventListener("push", (event) => {
  if (event.data) {
    console.log("This push event has data: ", event.data.text());
    const notification = event.data.json().notification;
    const promiseChain = self.registration.showNotification(notification.title, {
      body: notification.body,
    });
    event.waitUntil(promiseChain);
  } else {
    console.log("This push event has no data.");
  }
});
