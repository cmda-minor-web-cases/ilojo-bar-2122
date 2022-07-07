const CORE_CACHE_VERSION = 'v3'
const CORE_ASSETS = [
  '/offline',
  '/styles/general.css',
  '/styles/loading.css',
  '/styles/offline.css',
  '/styles/sendStory.css',
  '/styles/story.css',
  '/styles/style.css',
  '/styles/timeline.css',
  '/images/pogin5video.gif',
]

self.addEventListener('install', (event) =>{
  console.log('install')

  event.waitUntil(
    caches.open(CORE_CACHE_VERSION).then(function(cache) {
      return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', (event) =>{
  console.log('activate')
  event.waitUntil(clients.claim())
})

self.addEventListener('fetch', (event) => {
  console.log('fetch');
  if (isCoreGetRequest(event.request)) {
    console.log('Core get request: ', event.request.url);
    // cache only strategy
    event.respondWith(
      caches.open(CORE_CACHE_VERSION)
      .then(cache => cache.match(event.request.url))
    )} else if (isHtmlGetRequest(event.request)) {
      console.log('html get request', event.request.headers.get('accept'))
      // generic fallback
      event.respondWith(
        caches.open('html-cache')
        .then(cache => cache.match(event.request.url))
        .then(response => response ? response : fetchAndCache(event.request, 'html-cache'))
        .catch(e => {
          console.log('failed to fetch', e)
          return caches.open(CORE_CACHE_VERSION)
        .then(cache => cache.match('/offline'))
            })
    )
    }
});


// --------------------------------------------------------------------------------------------------------------------
function fetchAndCache(request, cacheName) {
  return fetch(request)
  .then(response => {
    if (!response.ok) {
      throw new TypeError('Bad response status');
    }
  
    const clone = response.clone()
    caches.open(cacheName).then((cache) => cache.put(request, clone))
      return response
  })
}

// Checks if a request is a GET and HTML request
function isHtmlGetRequest(request) {
  return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').includes('text/html'));
}

//Checks if a request is a core GET request
function isCoreGetRequest(request) {
  return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
}

// Get a pathname from a full URL by stripping off domain
function getPathName(requestUrl) {
  const url = new URL(requestUrl);
  return url.pathname;
}