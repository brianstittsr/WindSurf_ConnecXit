const CACHE_NAME = 'connexit-cache-v1';
const STATIC_CACHE_NAME = 'connexit-static-v1';

// Add static assets to be cached
const STATIC_ASSETS = [
  '/',
  '/landing',
  '/manifest.json',
  '/favicon.ico',
  '/icon-192.png',
  '/icon-512.png'
];

// Function to validate URL scheme
function isValidUrl(url) {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
}

// Cache static assets
async function cacheStaticAssets() {
  try {
    const cache = await caches.open(STATIC_CACHE_NAME);
    await Promise.all(
      STATIC_ASSETS.map(async (url) => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            await cache.put(url, response);
          }
        } catch (error) {
          console.warn(`Failed to cache ${url}:`, error);
        }
      })
    );
  } catch (error) {
    console.error('Failed to cache static assets:', error);
  }
}

// Install event handler
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      cacheStaticAssets(),
      self.skipWaiting()
    ])
  );
});

// Activate event handler
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('connexit-') && 
                     cacheName !== CACHE_NAME && 
                     cacheName !== STATIC_CACHE_NAME;
            })
            .map((cacheName) => caches.delete(cacheName))
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event handler
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and invalid URLs
  if (event.request.method !== 'GET' || !isValidUrl(event.request.url)) {
    return;
  }

  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        // Try to get from cache first
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // If not in cache, try network
        const response = await fetch(event.request);
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Cache successful responses
        try {
          const responseToCache = response.clone();
          await cache.put(event.request, responseToCache);
        } catch (error) {
          console.warn('Failed to cache response:', error);
        }

        return response;
      } catch (error) {
        console.error('Fetch error:', error);
        
        // Try to return cached version if network fails
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Return offline fallback
        return new Response('Offline', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-store'
          })
        });
      }
    })()
  );
});
