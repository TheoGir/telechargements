// Version web de HEAPS : toujours la dernière version quand le réseau répond,
// la dernière copie gardée sinon (jeu hors ligne). Une nouvelle version
// publiée arrive donc toute seule au chargement suivant.
const CACHE = 'heaps';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
        }
        return response;
      })
      .catch(() => caches.match(request, { ignoreSearch: true }).then(hit => hit ?? Response.error())),
  );
});
