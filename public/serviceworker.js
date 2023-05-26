const CACHE_NAME = "VERSION-1"
const urlsToCache = ['index.html', 'offline.html']

// INSTALL SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Failed to add URLs to cache:', error);
      })
  )

})

// LISTEN FOR REQUESTS
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
})

// ACITIVATE THE SW
self.addEventListener('activate', (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if(!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
    ))
  )

})