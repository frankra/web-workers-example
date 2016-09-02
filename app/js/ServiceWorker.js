self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        "/app/images/bg.jpg"
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // magic goes here
  );
});
