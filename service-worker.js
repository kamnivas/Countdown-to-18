const CACHE_NAME = 'countdown-to-18-cache-v1';  // Name of the cache
const URLS_TO_CACHE = [
  '/',  // The root path to your index.html
  'index.html',
  'manifest.json',
  'icons/clock-192.png',
  'icons/clock-512.png',
  'style.css',  // If you have a separate CSS file
  'script.js',  // Your JavaScript file
];

// Install the service worker and cache the resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching assets during service worker installation');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);  // Delete old caches
          }
        })
      );
    })
  );
});

// Intercept fetch requests and serve from cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found, otherwise fetch from network
        return cachedResponse || fetch(event.request);
      })
  );
});