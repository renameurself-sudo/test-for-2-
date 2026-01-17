'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bf2b2e1cfbbc7c69bba75be0f6cc6d71",
"version.json": "0baf4f53525e258e311e01378f3ee83e",
"index.html": "0a55831db9025e247aaa8ce5397eb0e5",
"/": "0a55831db9025e247aaa8ce5397eb0e5",
"main.dart.js": "7e1139ac7847b5c067f733c298e2daf0",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66cdf922a10d79ed917e85a0fab4fc4c",
"assets/NOTICES": "faf1902861b9a6d082b01b33391e1aa5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "543ca393891172ca54d8c2c0836f2497",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "08ef0ffb31fe306aac5e988b0f40e256",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/history_data/SCB_history.json": "bcc9ffc7e344e9476a63ec9d99b9384e",
"assets/assets/history_data/HIDCL_history.json": "95adff11dc7f96744f7bedeaaf73c29d",
"assets/assets/history_data/CYCL_history.json": "9f405f02a81fe9720650910b32f65047",
"assets/assets/history_data/ILI_history.json": "36a074b20a9cc4a4c7845581fc76678c",
"assets/assets/history_data/SHIVM_history.json": "7eaba1b9005d93d709e57f0f952c4f81",
"assets/assets/history_data/ALICL_history.json": "90b8c6764e537b4832c1202d5d08b515",
"assets/assets/history_data/SKBBL_history.json": "52badc564f5a8fafd4a0f7ea1366fb80",
"assets/assets/history_data/SNLI_history.json": "15a0f37e1cfc23f53c78aa4495350299",
"assets/assets/history_data/BHPL_history.json": "b24906e1261f6fbf6e5f6e838efb1e4e",
"assets/assets/history_data/GCIL_history.json": "302065f26ade713cd58ed7f8051fb0e3",
"assets/assets/history_data/CHDC_history.json": "f4fa5812b70d723f94b72d38af8778f7",
"assets/assets/history_data/HRL_history.json": "97f0bbb9ab55ab6f2baaefbb1efba889",
"assets/assets/history_data/RNLI_history.json": "b009e9a84db5323857bbf2d9272e0bb5",
"assets/assets/history_data/SJLIC_history.json": "24acbac62c3ebe720a6498da37e230f4",
"assets/assets/history_data/SGHC_history.json": "940506994c7cedb2bc3cad1bba44ec1c",
"assets/assets/history_data/JBLB_history.json": "dfba5bf6ae4f2f8356239f2f0fcc53d8",
"assets/assets/history_data/NBL_history.json": "436138618a1032b710deefc507318930",
"assets/assets/history_data/NIFRA_history.json": "f3b64f1eb464dc7723d352913df40fbf",
"assets/assets/history_data/SBI_history.json": "4b06f2f04fea45cdecbba4ca106617e3",
"assets/assets/history_data/NIMB_history.json": "d811937be80a8fc590be123f69e7fce7",
"assets/assets/history_data/NMB_history.json": "65410b149cba40b107ce0da1db59ffd8",
"assets/assets/history_data/PHCL_history.json": "b7f0e8c86cc0ba8aed04d59c4e8bbd35",
"assets/assets/history_data/MBL_history.json": "91444e5059a76cd54e29994e8938c23c",
"assets/assets/history_data/RFPL_history.json": "3b06252c0f06178081d71343ff618cb5",
"assets/assets/history_data/LSL_history.json": "117024a46a2ef392f13b9a120f000d2d",
"assets/assets/history_data/DORDI_history.json": "8454e9b9a6b066c903cf712c7d625333",
"assets/assets/history_data/Bandipur_history.json": "a0c4d050efd3d94228cf076084b6af9e",
"assets/assets/logo.png": "b12a266d20f8761c795d07d6326d6fc9",
"assets/assets/portfolio_db.json": "a7735b67b393cb6b4e0b0e2521adc3af",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
