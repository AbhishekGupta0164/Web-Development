var CACHE_NAME = 'air1-cache-v1';
var urlsToCache = [
  './',
  './gate.html',
  './icon.png',
  './manifest.json',
  './lib/react.min.js',
  './lib/react-dom.min.js',
  './lib/prop-types.min.js',
  './lib/babel.min.js',
  './lib/recharts.js'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    }).catch(function() {
      // Offline fallback
      return caches.match('./gate.html');
    })
  );
});
