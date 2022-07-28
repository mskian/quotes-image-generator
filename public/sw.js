importScripts(
    'https://cdn.jsdelivr.net/npm/workbox-sw@6.5.3/build/workbox-sw.min.js'
);
var lumecache = 'quotes-maker-pwacache';
if (workbox) {
    console.log(`Workbox is loaded`);
    workbox.setConfig({
        debug: false,
    });
    workbox.precaching.precacheAndRoute([]);
    const cache_NF = new workbox.strategies.NetworkFirst({
        cacheName: 'quotes-maker-cache' + lumecache + '-NF',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 172800,
            }),
        ],
    });
    const cache_CF = new workbox.strategies.CacheFirst({
        cacheName: 'quotes-maker-cache' + lumecache + '-CF',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    });
    const cache_CF_google_fonts = new workbox.strategies.CacheFirst({
        cacheName: 'quotes-maker-cache' + lumecache + '-CF-google-fonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                statuses: [0, 200],
            }),
        ],
    });
    workbox.routing.registerRoute(
        /(.*)(?:fonts.googleapis.com|fonts.gstatic.com)/,
        args => {
            return cache_CF_google_fonts.handle(args);
        }
    );
    workbox.routing.registerRoute(/(.*)(?:fonts.bunny.net)/, args => {
        return cache_CF_google_fonts.handle(args);
    });
    workbox.routing.registerRoute(
        /(.*)\/\/(create\.kavithai\.site.*)\.(?:woff|woff2|eot|ttf|mp4|mp3|jpg|jpeg|webp|svg|png|gif|ico|js|css)/,
        args => {
            return cache_CF.handle(args);
        }
    );
    workbox.routing.registerRoute(
        /(.*)\.(?:woff|woff2|eot|ttf|mp4|mp3|jpg|jpeg|webp|svg|png|gif|ico|css)/,
        args => {
            return cache_CF.handle(args);
        }
    );
} else {
    console.log(`PWA not Found`);
}
