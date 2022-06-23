// const cacheName = 'site-v1';
// const dynamicCacheName = 'site-dynamic-v1';
// const cacheAssets = [
//   '/style.css'
// ];

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(cacheName).then(cache => {
//             cache.addAll(cacheAssets);
//         })
//     )
// })

// self.addEventListener('activate', event => {
//     event.waitUntil(
//         caches.keys().then(keys => {
//             return Promise.all(keys
//                 .filter(key => key !== cacheName && key !== dynamicCacheName)
//                 .map(key => caches.delete(key))
//             )
//         })
//     );
// });

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request).then(response => {
//             return response || fetch(event.request).then(fetchRes => {
//                 return caches.open(dynamicCacheName).then(cache => {
//                     cache.put(event.request.url, fetchRes.clone());
//                     return fetchRes;
//                 })
//             });
//         })
//     );
// });