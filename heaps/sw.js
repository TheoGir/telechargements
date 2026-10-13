// Version web de HEAPS : toujours la dernière version quand le réseau répond,
// la dernière copie gardée sinon (jeu hors ligne). Une nouvelle version
// publiée arrive donc toute seule au chargement suivant.
//
// Les fichiers de `assets/` portent une empreinte dans leur nom : leur contenu
// ne change jamais, ils sont servis depuis le cache sans attendre le réseau
// (démarrage immédiat sur un réseau lent ou absent). Tout le reste (page,
// moteur WebAssembly, manifeste) est demandé au réseau d'abord.
const CACHE = 'heaps';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

const store = (event, request, response) => {
  if (!response.ok) return response;
  const copy = response.clone();
  event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
  return response;
};

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== location.origin) return;
  const immutable = url.pathname.includes('/assets/');
  event.respondWith(
    immutable
      ? caches.match(request).then(hit => hit ?? fetch(request).then(response => store(event, request, response)))
      : fetch(request)
          .then(response => store(event, request, response))
          .catch(() => caches.match(request, { ignoreSearch: true }).then(hit => hit ?? Response.error())),
  );
});
